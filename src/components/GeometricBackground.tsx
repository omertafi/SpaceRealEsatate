import React, { useEffect, useRef } from 'react';

/**
 * GeometricBackground: Living Architectural & Real Estate Canvas
 *
 * Adds living, breathing architectural drafting dynamics across the entire site:
 * - High-DPI (Retina) support for razor-sharp geometric lines on all screens.
 * - Rotating isometric wireframe architectural buildings, cubes, floorplates & drafting arcs.
 * - Drifting structural survey nodes that connect with dynamic gold/slate rafters.
 * - Gentle scanning architectural level datum line.
 * - Touch & mouse interactivity bringing living reaction to user engagement.
 * - 100% pointer-events-none, strictly preserving all existing layouts, cards, and backgrounds.
 */
export const GeometricBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse & Touch coordinates
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    const handlePointerMove = (clientX: number, clientY: number) => {
      pointer.targetX = clientX;
      pointer.targetY = clientY;
      pointer.active = true;
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('touchend', onPointerLeave);

    // 1. ARCHITECTURAL SURVEY NODES
    // Responsive count: fewer on mobile for silky smooth performance
    const isMobile = width < 768;
    const nodeCount = isMobile ? 18 : Math.min(36, Math.floor((width * height) / 36000));

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isGolden: boolean;
      pulseAngle: number;
      hasCrosshair: boolean;
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.45),
      vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.45),
      radius: Math.random() * 1.5 + 1.2,
      isGolden: i % 3 === 0,
      pulseAngle: Math.random() * Math.PI * 2,
      hasCrosshair: i % 5 === 0,
    }));

    // 2. FLOATING ISOMETRIC & ARCHITECTURAL WIREFRAME STRUCTURES
    interface Wireframe {
      x: number;
      y: number;
      size: number;
      angle: number;
      rotSpeed: number;
      vx: number;
      vy: number;
      type: 'cube' | 'roof' | 'compass' | 'tower';
    }

    const wireframes: Wireframe[] = [
      {
        x: width * 0.12,
        y: height * 0.22,
        size: isMobile ? 55 : 80,
        angle: 0,
        rotSpeed: 0.0018,
        vx: 0.09,
        vy: 0.06,
        type: 'cube',
      },
      {
        x: width * 0.88,
        y: height * 0.35,
        size: isMobile ? 65 : 95,
        angle: Math.PI / 4,
        rotSpeed: -0.0016,
        vx: -0.08,
        vy: 0.1,
        type: 'tower',
      },
      {
        x: width * 0.82,
        y: height * 0.78,
        size: isMobile ? 70 : 110,
        angle: 0,
        rotSpeed: 0.0012,
        vx: 0.05,
        vy: -0.08,
        type: 'compass',
      },
      {
        x: width * 0.16,
        y: height * 0.74,
        size: isMobile ? 60 : 90,
        angle: Math.PI / 3,
        rotSpeed: -0.0014,
        vx: -0.07,
        vy: -0.05,
        type: 'roof',
      },
    ];

    // 3. SCANNING ARCHITECTURAL DATUM LEVEL LINE
    let laserY = 0;
    const laserSpeed = 0.55;

    // RENDER LOOP
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer interpolate
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      // Update & Draw Laser Scan Datum Line
      laserY += laserSpeed;
      if (laserY > height + 60) laserY = -40;

      const grad = ctx.createLinearGradient(0, laserY, width, laserY);
      grad.addColorStop(0, 'rgba(199, 157, 59, 0)');
      grad.addColorStop(0.2, 'rgba(199, 157, 59, 0.05)');
      grad.addColorStop(0.5, 'rgba(199, 157, 59, 0.16)');
      grad.addColorStop(0.8, 'rgba(199, 157, 59, 0.05)');
      grad.addColorStop(1, 'rgba(199, 157, 59, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, laserY);
      ctx.lineTo(width, laserY);
      ctx.stroke();

      // Small elevation tick
      ctx.fillStyle = 'rgba(199, 157, 59, 0.32)';
      ctx.font = '9px monospace';
      ctx.fillText(`LVL ${(laserY / 10).toFixed(1)}m`, 16, laserY - 4);

      // 4. DRAW FLOATING 3D WIREFRAMES
      wireframes.forEach((wf) => {
        wf.x += wf.vx;
        wf.y += wf.vy;
        wf.angle += wf.rotSpeed;

        if (wf.x < -120) wf.x = width + 120;
        if (wf.x > width + 120) wf.x = -120;
        if (wf.y < -120) wf.y = height + 120;
        if (wf.y > height + 120) wf.y = -120;

        ctx.save();
        ctx.translate(wf.x, wf.y);
        ctx.rotate(wf.angle);

        if (wf.type === 'cube') {
          // Isometric 3D Cube
          ctx.strokeStyle = 'rgba(199, 157, 59, 0.18)';
          ctx.lineWidth = 1;
          const s = wf.size * 0.5;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (i * Math.PI) / 3;
            const px = Math.cos(a) * s;
            const py = Math.sin(a) * s;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();

          // Internal isometric axes
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -s);
          ctx.moveTo(0, 0);
          ctx.lineTo((Math.sqrt(3) / 2) * s, s * 0.5);
          ctx.moveTo(0, 0);
          ctx.lineTo((-Math.sqrt(3) / 2) * s, s * 0.5);
          ctx.stroke();
        } else if (wf.type === 'tower') {
          // Modern architectural multi-floor building structure
          ctx.strokeStyle = 'rgba(199, 157, 59, 0.17)';
          ctx.lineWidth = 1;
          const w = wf.size * 0.45;
          const h = wf.size * 0.8;
          ctx.strokeRect(-w / 2, -h / 2, w, h);

          // Floor plates
          const floors = 4;
          for (let f = 1; f < floors; f++) {
            const fy = -h / 2 + (h / floors) * f;
            ctx.beginPath();
            ctx.moveTo(-w / 2, fy);
            ctx.lineTo(w / 2, fy);
            ctx.stroke();
          }

          // Architectural diagonal bracing
          ctx.beginPath();
          ctx.moveTo(-w / 2, -h / 2);
          ctx.lineTo(w / 2, h / 2);
          ctx.moveTo(w / 2, -h / 2);
          ctx.lineTo(-w / 2, h / 2);
          ctx.strokeStyle = 'rgba(199, 157, 59, 0.09)';
          ctx.stroke();
        } else if (wf.type === 'roof') {
          // Architectural pitched roof / structural truss
          ctx.strokeStyle = 'rgba(199, 157, 59, 0.18)';
          ctx.lineWidth = 1;
          const s = wf.size * 0.6;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.86, s * 0.5);
          ctx.lineTo(-s * 0.86, s * 0.5);
          ctx.closePath();
          ctx.stroke();

          // Support posts
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(0, s * 0.5);
          ctx.moveTo(-s * 0.43, 0);
          ctx.lineTo(s * 0.43, 0);
          ctx.stroke();
        } else if (wf.type === 'compass') {
          // Drafting Compass with degree ticks
          ctx.strokeStyle = 'rgba(199, 157, 59, 0.15)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(0, 0, wf.size * 0.5, 0, Math.PI * 2);
          ctx.stroke();

          // Inner circle
          ctx.beginPath();
          ctx.arc(0, 0, wf.size * 0.35, 0, Math.PI * 2);
          ctx.stroke();

          // Degree ticks
          for (let i = 0; i < 12; i++) {
            const a = (i * Math.PI) / 6;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * (wf.size * 0.42), Math.sin(a) * (wf.size * 0.42));
            ctx.lineTo(Math.cos(a) * (wf.size * 0.5), Math.sin(a) * (wf.size * 0.5));
            ctx.stroke();
          }
        }

        ctx.restore();
      });

      // 5. UPDATE & DRAW SURVEY NODES + CONNECTING RAFTER LINES
      const maxDist = isMobile ? 130 : 175;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulseAngle += 0.03;

        // Bounce gently inside canvas bounds
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Draw connections between neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.14;
            ctx.strokeStyle = n1.isGolden || n2.isGolden
              ? `rgba(199, 157, 59, ${alpha * 1.6})`
              : `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Pointer proximity reaction
        if (pointer.active) {
          const mdx = n1.x - pointer.x;
          const mdy = n1.y - pointer.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const maxPointerDist = isMobile ? 140 : 180;

          if (mdist < maxPointerDist) {
            const mAlpha = (1 - mdist / maxPointerDist) * 0.32;
            ctx.strokeStyle = `rgba(199, 157, 59, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        // Node dot
        const pulse = Math.sin(n1.pulseAngle) * 0.35 + 1;
        const color = n1.isGolden ? 'rgba(199, 157, 59,' : 'rgba(120, 144, 156,';
        ctx.fillStyle = `${color} 0.55)`;
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Architectural Crosshair
        if (n1.hasCrosshair) {
          const crossSize = 4;
          ctx.strokeStyle = `${color} 0.45)`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(n1.x - crossSize, n1.y);
          ctx.lineTo(n1.x + crossSize, n1.y);
          ctx.moveTo(n1.x, n1.y - crossSize);
          ctx.lineTo(n1.x, n1.y + crossSize);
          ctx.stroke();
        }
      }

      // Small cursor coordinates HUD if active on desktop
      if (pointer.active && !isMobile) {
        ctx.fillStyle = 'rgba(199, 157, 59, 0.4)';
        ctx.font = '8px monospace';
        ctx.fillText(`GEO [${Math.round(pointer.x)}, ${Math.round(pointer.y)}]`, pointer.x + 12, pointer.y - 10);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('touchend', onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 w-full h-full select-none"
      aria-hidden="true"
    />
  );
};
