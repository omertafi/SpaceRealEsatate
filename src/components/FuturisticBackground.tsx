import React, { useEffect, useRef } from 'react';

export const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 1. Constellation Nodes & Laser Filaments
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const particlesCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles: Particle[] = [];

    const colors = [
      'rgba(47, 93, 124, ',   // Professional Blue
      'rgba(198, 161, 91, ',  // Champagne Gold
      'rgba(16, 42, 67, ',    // Deep Navy
    ];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // 2. Futuristic 3D Isometric Rotating Geometry Wireframes
    interface WireframeShape {
      x: number;
      y: number;
      size: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      vRotX: number;
      vRotY: number;
      vRotZ: number;
      type: 'cube' | 'octahedron' | 'ring';
      color: string;
    }

    const shapes: WireframeShape[] = [
      {
        x: width * 0.82,
        y: height * 0.28,
        size: 90,
        rotX: 0.4,
        rotY: 0.2,
        rotZ: 0,
        vRotX: 0.003,
        vRotY: 0.005,
        vRotZ: 0.002,
        type: 'cube',
        color: 'rgba(47, 93, 124, 0.16)',
      },
      {
        x: width * 0.15,
        y: height * 0.65,
        size: 110,
        rotX: 0.6,
        rotY: 0.8,
        rotZ: 0.1,
        vRotX: 0.004,
        vRotY: 0.003,
        vRotZ: 0.004,
        type: 'octahedron',
        color: 'rgba(198, 161, 91, 0.18)',
      },
      {
        x: width * 0.88,
        y: height * 0.78,
        size: 80,
        rotX: 1.1,
        rotY: 0.4,
        rotZ: 0.5,
        vRotX: 0.002,
        vRotY: 0.006,
        vRotZ: 0.003,
        type: 'ring',
        color: 'rgba(47, 93, 124, 0.16)',
      },
    ];

    let time = 0;

    // Helper: 3D point projection
    const project = (
      px: number,
      py: number,
      pz: number,
      rotX: number,
      rotY: number,
      rotZ: number,
      cx: number,
      cy: number
    ) => {
      // Rotate Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = px * cosY + pz * sinY;
      const z1 = -px * sinY + pz * cosY;

      // Rotate X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = py * cosX - z1 * sinX;
      const z2 = py * sinX + z1 * cosX;

      // Rotate Z
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);
      const x3 = x1 * cosZ - y2 * sinZ;
      const y3 = x1 * sinZ + y2 * cosZ;

      const fov = 400;
      const distance = 400;
      const scale = fov / (distance + z2);

      return {
        x: cx + x3 * scale,
        y: cy + y3 * scale,
        z: z2,
      };
    };

    // Draw futuristic wireframe cube
    const drawCube = (shape: WireframeShape) => {
      const s = shape.size / 2;
      const vertices = [
        [-s, -s, -s],
        [s, -s, -s],
        [s, s, -s],
        [-s, s, -s],
        [-s, -s, s],
        [s, -s, s],
        [s, s, s],
        [-s, s, s],
      ];

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back
        [4, 5], [5, 6], [6, 7], [7, 4], // front
        [0, 4], [1, 5], [2, 6], [3, 7], // connectors
      ];

      const projected = vertices.map((v) =>
        project(v[0], v[1], v[2], shape.rotX, shape.rotY, shape.rotZ, shape.x, shape.y)
      );

      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });

      // Vertices micro-points
      projected.forEach((p) => {
        ctx.fillStyle = 'rgba(198, 161, 91, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw futuristic octahedron (gem-like structure)
    const drawOctahedron = (shape: WireframeShape) => {
      const s = shape.size / 1.6;
      const vertices = [
        [0, -s * 1.3, 0], // top
        [s, 0, 0],
        [0, 0, s],
        [-s, 0, 0],
        [0, 0, -s],
        [0, s * 1.3, 0], // bottom
      ];

      const edges = [
        [0, 1], [0, 2], [0, 3], [0, 4], // top pyramid
        [5, 1], [5, 2], [5, 3], [5, 4], // bottom pyramid
        [1, 2], [2, 3], [3, 4], [4, 1], // equatorial belt
      ];

      const projected = vertices.map((v) =>
        project(v[0], v[1], v[2], shape.rotX, shape.rotY, shape.rotZ, shape.x, shape.y)
      );

      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });

      projected.forEach((p) => {
        ctx.fillStyle = 'rgba(47, 93, 124, 0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw orbital quantum ring
    const drawRing = (shape: WireframeShape) => {
      const radius = shape.size / 1.5;
      const segments = 24;
      const points = [];

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const px = Math.cos(angle) * radius;
        const pz = Math.sin(angle) * radius;
        points.push(project(px, 0, pz, shape.rotX, shape.rotY, shape.rotZ, shape.x, shape.y));
      }

      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      // Satellite orbiting node
      const satAngle = time * 2;
      const satX = Math.cos(satAngle) * radius;
      const satZ = Math.sin(satAngle) * radius;
      const satP = project(satX, 0, satZ, shape.rotX, shape.rotY, shape.rotZ, shape.x, shape.y);

      ctx.fillStyle = '#C6A15B';
      ctx.shadowColor = '#C6A15B';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(satP.x, satP.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    };

    const render = () => {
      time += 0.01;

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle cybernetic perspective grid (horizon gradient)
      const gridSpacing = 60;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(47, 93, 124, 0.03)';

      // Vertical perspective lines converging toward a soft vanishing center
      const vanishingX = width / 2 + (mouseX - width / 2) * 0.04;
      const vanishingY = height * 0.35 + (mouseY - height / 2) * 0.04;

      for (let x = -width * 0.5; x <= width * 1.5; x += gridSpacing * 2) {
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(vanishingX, vanishingY);
        ctx.stroke();
      }

      // Horizontal horizon lines
      for (let y = height * 0.4; y <= height; y += gridSpacing) {
        const lineAlpha = ((y - height * 0.4) / (height * 0.6)) * 0.04;
        ctx.strokeStyle = `rgba(47, 93, 124, ${lineAlpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render 3D Rotating Geometric Wireframes
      shapes.forEach((shape) => {
        shape.rotX += shape.vRotX;
        shape.rotY += shape.vRotY;
        shape.rotZ += shape.vRotZ;

        // Interactive mouse parallax drift
        const dx = (mouseX - width / 2) * 0.03;
        const dy = (mouseY - height / 2) * 0.03;

        const renderedShape = {
          ...shape,
          x: shape.x + dx,
          y: shape.y + dy,
        };

        if (shape.type === 'cube') drawCube(renderedShape);
        if (shape.type === 'octahedron') drawOctahedron(renderedShape);
        if (shape.type === 'ring') drawRing(renderedShape);
      });

      // Update & Draw Constellation Particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance / gentle ripple
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * 0.8;
          p.y -= Math.sin(angle) * 0.8;
        }

        const currentAlpha = 0.25 + 0.35 * Math.sin(time * p.pulseSpeed * 20 + p.pulseOffset);

        ctx.fillStyle = `${p.color}${Math.max(0.1, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with delicate laser filaments
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 140) {
            const lineAlpha = (1 - distNodes / 140) * 0.08;
            ctx.strokeStyle = `rgba(47, 93, 124, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Interactive HTML5 3D Spatial Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60"
      />

      {/* Subtle luxury ambient gradient blurs for light aesthetic */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#C6A15B]/06 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-[#2F5D7C]/05 blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-[#102A43]/04 blur-[120px] pointer-events-none" />
    </div>
  );
};
