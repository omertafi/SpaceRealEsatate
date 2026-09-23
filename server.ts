import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', node: 'SPACE Quantum Real Estate', timestamp: new Date().toISOString() });
  });

  // Direct Lead & Inquiry Contact Endpoint (Sends directly to info@spacereal.estate)
  app.post('/api/contact', async (req, res) => {
    try {
      const { fullName, phone, email, clientType, message } = req.body;
      if (!fullName || !email || !message) {
        return res.status(400).json({ error: 'Please provide full name, email, and message.' });
      }

      const recipient = process.env.TARGET_INQUIRY_EMAIL || 'info@spacereal.estate';
      const subject = `Space Real Estate Inquiry from ${fullName} (${clientType || 'Client'})`;

      let deliveredVia = 'none';

      // 1. Try Custom SMTP if credentials exist in environment
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: `"Space Real Estate Website" <${process.env.SMTP_USER}>`,
            to: recipient,
            replyTo: email,
            subject,
            text: `New Website Inquiry:\n\nName: ${fullName}\nPhone: ${phone || 'Not provided'}\nEmail: ${email}\nClient Type: ${clientType}\n\nMessage:\n${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                <div style="background: #11141a; padding: 16px 24px; border-radius: 8px; margin-bottom: 20px;">
                  <h2 style="color: #ffffff; margin: 0; font-size: 20px;">SPACE <span style="color: #C79D3B;">REAL ESTATE</span></h2>
                  <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px;">New Direct Website Lead / استفسار جديد عبر الموقع</p>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 30%;">Full Name:</td><td style="padding: 8px 0; color: #0f172a;">${fullName}</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone || 'N/A'}</a></td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #C79D3B; text-decoration: none;">${email}</a></td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Inquiry Type:</td><td style="padding: 8px 0; color: #0f172a;">${clientType}</td></tr>
                </table>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #C79D3B;">
                  <strong style="color: #334155; display: block; margin-bottom: 8px;">Client Message:</strong>
                  <p style="color: #0f172a; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            `,
          });
          deliveredVia = 'smtp';
        } catch (smtpErr) {
          console.error('SMTP delivery error:', smtpErr);
        }
      }

      // 2. HTTP Dispatch to FormSubmit directly targeting recipient
      if (deliveredVia === 'none') {
        try {
          const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Referer: 'https://spacerealestate.ae',
              Origin: 'https://spacerealestate.ae',
            },
            body: JSON.stringify({
              name: fullName,
              email,
              phone: phone || 'N/A',
              client_type: clientType,
              message,
              _replyto: email,
              _captcha: 'false',
              _subject: subject,
              _template: 'table',
            }),
          });

          const data = await response.json().catch(() => null);
          if (response.ok && data && data.success !== 'false' && data.success !== false) {
            deliveredVia = 'formsubmit';
            console.log(`[SPACE Contact] Successfully forwarded inquiry to ${recipient} via FormSubmit`);
          } else {
            console.warn('[SPACE Contact] FormSubmit status response:', data);
          }
        } catch (fsErr) {
          console.warn('FormSubmit dispatch notice:', fsErr);
        }
      }

      // 3. Save to local durable inquiries database so no lead is ever lost
      try {
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }
        const inquiriesFile = path.join(dataDir, 'inquiries.json');
        let currentInquiries: any[] = [];
        if (fs.existsSync(inquiriesFile)) {
          try {
            currentInquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf-8'));
          } catch {
            currentInquiries = [];
          }
        }
        currentInquiries.unshift({
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          fullName,
          phone: phone || 'N/A',
          email,
          clientType,
          message,
          deliveredVia,
          recipient,
        });
        fs.writeFileSync(inquiriesFile, JSON.stringify(currentInquiries.slice(0, 200), null, 2));
      } catch (saveErr) {
        console.warn('Inquiry backup storage notice:', saveErr);
      }

      // Generate formatted mailto string for client convenience
      const mailtoBody = encodeURIComponent(
        `Name: ${fullName}\nPhone: ${phone || 'N/A'}\nEmail: ${email}\nClient Type: ${clientType}\n\nMessage:\n${message}`
      );
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

      return res.json({
        success: true,
        deliveredVia,
        recipient,
        mailtoLink,
      });
    } catch (err: any) {
      console.error('Contact endpoint error:', err);
      return res.status(500).json({ error: 'Failed to process inquiry', details: err?.message });
    }
  });

  // Internal Inquiries Listing Endpoint (Accessible to admin/management)
  app.get('/api/inquiries', (req, res) => {
    try {
      const inquiriesFile = path.join(process.cwd(), 'data', 'inquiries.json');
      if (fs.existsSync(inquiriesFile)) {
        const list = JSON.parse(fs.readFileSync(inquiriesFile, 'utf-8'));
        return res.json({ success: true, count: list.length, inquiries: list });
      }
      return res.json({ success: true, count: 0, inquiries: [] });
    } catch (err: any) {
      return res.status(500).json({ error: 'Failed to fetch inquiries', details: err?.message });
    }
  });

  // AI Property Consultant Endpoint (Gemini API with lazy initialization & graceful fallback)
  app.post('/api/ai/property-consultant', async (req, res) => {
    try {
      const { prompt, language = 'en' } = req.body;

      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Valid prompt is required.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Return standard intelligent advisor guidance when API key is not configured
        return res.json({
          reply: getSystemFallbackAnswer(prompt, language),
          source: 'local_rule_engine',
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are "SPACE AI", the elite architectural asset consultant and wealth advisor for SPACE REAL ESTATE.
The company specializes exclusively in ultra-luxury futuristic real estate sales and comprehensive asset management (sales, algorithmic tenant placement, zero-vacancy management, 7-star VIP concierge, smart contracts).
You must answer the user's question clearly, professionally, and with high-tech visionary vocabulary in the requested language: ${language}.
Focus on:
1. Selling trophy assets (orbital penthouses, biophilic islands, mega-towers)
2. Professional asset management (occupancy optimization, predictive IoT maintenance, high rental yields 8-14%)
3. Mathematical ROI projections.
Keep responses concise, elegant, formatted with bullet points, and authoritative.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || getSystemFallbackAnswer(prompt, language);
      return res.json({ reply: replyText, source: 'gemini' });
    } catch (err) {
      console.error('AI Property Consultant API error:', err);
      return res.json({
        reply: getSystemFallbackAnswer(req.body.prompt || '', req.body.language || 'en'),
        source: 'fallback_recovery',
      });
    }
  });

  function getSystemFallbackAnswer(query: string, lang: string): string {
    if (lang === 'ar') {
      return `مرحباً بك في سبيس العقارية (SPACE REAL ESTATE).
استناداً إلى استفسارك ومؤشرات السوق الفاخر لعام 2026:
• نشاط الشركة الأساسي: بيع وإدارة العقارات الفاخرة والاستثمارية في أبرز العواصم (دبي، طوكيو، لندن، زيورخ).
• في مبيعات العقارات: نوفر وحدات معمارية استثنائية (بنتهاوسات طائرة، جزر بيوفيلية ذكية، أبراج أعمال متطورة) بعوائد رأسمالية تتجاوز 14% سنوياً.
• في إدارة الأملاك: نضمن نسبة إشغال 99.4% بفضل خوارزميات الذكاء الاصطناعي والصيانة الاستباقية الفورية مع زيادة الإيرادات بنسبة +32%.
يمكنك استخدام حاسبة العوائد أو حجز جولة هولوجرامية ثلاثية الأبعاد لمعاينة أي عقار فوراً.`;
    } else if (lang === 'zh') {
      return `您好！欢迎来到 SPACE 未来科技地产（SPACE REAL ESTATE）。
针对您的问题与 2026 全球顶奢不动产趋势：
• 公司核心业务：全球前沿超奢地产的「销售」与「全链条智能资产托管」（覆盖迪拜、东京、伦敦、苏黎世等主要节点）。
• 资产销售：甄选轨道悬浮天际庄园、自给型生态海岛与科技商务总部，平均预期综合 ROI 超 14.8%。
• 资产托管：依托独家 IoT 预见性运维与高净值客群算法撮合，达成 99.4% 零空置保障，使业主年化净租金增益平均提升 +32%。
随时欢迎您体验 3D WebXR 全息导览，或使用收益模拟器测算您的资产未来价值。`;
    } else if (lang === 'ru') {
      return `Добро пожаловать в SPACE REAL ESTATE.
По вашему запросу на основе аналитических данных рынка суперпремиальной недвижимости:
• Направления деятельности: продажа и комплексное доверительное управление элитными архитектурными активами (Дубай, Токио, Лондон, Цюрих).
• Продажа объектов: футуристические пентхаусы, биофильные острова и коммерческие хабы с прогнозируемым совокупным ROI более 14.8% годовых.
• Управление недвижимостью: среднегодовая заполняемость 99.4% благодаря алгоритмическому подбору арендаторов и автономному IoT-мониторингу, приносящему до +32% дополнительного дохода.
Вы можете записаться на голографический VIP-просмотр или воспользоваться калькулятором доходности на сайте.`;
    } else {
      return `Welcome to SPACE REAL ESTATE.
Based on your inquiry and our 2026 ultra-luxury market intelligence:
• Core Focus: Global sales and end-to-end asset management of visionary architectural properties (Dubai, Tokyo, London, Zurich).
• Property Sales: Portfolio of trophy assets (floating sky-mansions, biophilic private atolls, quantum commercial hubs) offering 14.8%+ projected annual IRR.
• Asset Management: Delivering 99.4% continuous occupancy via algorithmic tenant placement and predictive IoT zero-downtime maintenance, generating +32% rental premium.
Feel free to launch an interactive 3D WebXR tour or utilize our ROI Simulator for a custom financial breakdown.`;
    }
  }

  // Static assets from public and logo directories
  app.use(express.static(path.join(process.cwd(), 'public')));
  app.use('/logo', express.static(path.join(process.cwd(), 'logo')));

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SPACE Real Estate] Server operational on http://0.0.0.0:${PORT}`);
  });
}

startServer();
