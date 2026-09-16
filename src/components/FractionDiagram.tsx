import React from 'react';
import { QuestionDiagram } from '../types';

interface FractionDiagramProps {
  diagram?: QuestionDiagram;
  compact?: boolean;
}

export const FractionDiagram: React.FC<FractionDiagramProps> = ({ diagram, compact = false }) => {
  if (!diagram) return null;

  return (
    <div
      className={`my-4 p-4 rounded-2xl bg-slate-50/90 border border-blue-100 shadow-2xs flex flex-col items-center justify-center select-none ${
        compact ? 'max-w-md mx-auto py-3' : 'max-w-xl mx-auto'
      }`}
    >
      {/* Visual Header / Caption */}
      {diagram.caption && (
        <div className="mb-3 text-xs font-bold text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full text-center">
          {diagram.caption}
        </div>
      )}

      {/* 1. Circle Fraction (Kue / Pizza Berbagi Slices) */}
      {diagram.type === 'circle_fraction' && (
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 200 200"
            className="w-44 h-44 sm:w-48 sm:h-48 drop-shadow-xs"
          >
            <circle cx="100" cy="100" r="90" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2.5" />
            {(() => {
              const total = diagram.totalParts || 8;
              const shaded = diagram.shadedParts || 3;
              const slices = [];
              const anglePerSlice = (2 * Math.PI) / total;

              for (let i = 0; i < total; i++) {
                const startAngle = i * anglePerSlice - Math.PI / 2;
                const endAngle = (i + 1) * anglePerSlice - Math.PI / 2;
                const isShaded = i < shaded;

                const x1 = 100 + 90 * Math.cos(startAngle);
                const y1 = 100 + 90 * Math.sin(startAngle);
                const x2 = 100 + 90 * Math.cos(endAngle);
                const y2 = 100 + 90 * Math.sin(endAngle);

                const pathData = `M 100 100 L ${x1} ${y1} A 90 90 0 0 1 ${x2} ${y2} Z`;

                slices.push(
                  <path
                    key={i}
                    d={pathData}
                    fill={isShaded ? '#3b82f6' : '#ffffff'}
                    stroke="#1e3a8a"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="transition-colors"
                  />
                );
              }
              return slices;
            })()}
            {/* Titik Tengah */}
            <circle cx="100" cy="100" r="4" fill="#1e3a8a" />
          </svg>
          <div className="mt-2 text-xs font-semibold text-slate-600 text-center">
            Bagian diarsir (biru): <span className="text-blue-700 font-bold">{diagram.shadedParts} dari {diagram.totalParts} bagian sama besar</span>
          </div>
        </div>
      )}

      {/* 2. Bar Fraction (Balok / Pita Persegi Panjang) */}
      {diagram.type === 'bar_fraction' && (
        <div className="w-full max-w-md flex flex-col items-center">
          <svg viewBox="0 0 300 70" className="w-full h-auto drop-shadow-2xs">
            {(() => {
              const total = diagram.totalParts || 6;
              const shaded = diagram.shadedParts || 4;
              const partWidth = 280 / total;
              const rects = [];

              for (let i = 0; i < total; i++) {
                const isShaded = i < shaded;
                rects.push(
                  <g key={i}>
                    <rect
                      x={10 + i * partWidth}
                      y={10}
                      width={partWidth}
                      height={50}
                      fill={isShaded ? '#10b981' : '#ffffff'}
                      stroke="#065f46"
                      strokeWidth="2"
                      rx="3"
                    />
                    <text
                      x={10 + i * partWidth + partWidth / 2}
                      y={40}
                      textAnchor="middle"
                      fill={isShaded ? '#ffffff' : '#475569'}
                      fontSize="14"
                      fontWeight="bold"
                    >
                      1/{total}
                    </text>
                  </g>
                );
              }
              return rects;
            })()}
          </svg>
          <div className="mt-2 text-xs font-semibold text-slate-600 text-center">
            Daerah berarsir hijau: <span className="text-emerald-700 font-bold">{diagram.shadedParts}/{diagram.totalParts} bagian</span>
          </div>
        </div>
      )}

      {/* 3. Mixed Fraction (Pecahan Campuran: 2 Penuh + 1/4) */}
      {diagram.type === 'mixed_fraction' && (
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {/* Lingkaran Penuh 1 */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
                <circle cx="50" cy="50" r="45" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
                <text x="50" y="56" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">1</text>
              </svg>
              <span className="text-[11px] font-bold text-amber-900 mt-1">1 Bangun Penuh</span>
            </div>

            {/* Lingkaran Penuh 2 */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
                <circle cx="50" cy="50" r="45" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
                <text x="50" y="56" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">1</text>
              </svg>
              <span className="text-[11px] font-bold text-amber-900 mt-1">1 Bangun Penuh</span>
            </div>

            {/* Plus visual sign */}
            <div className="text-xl font-bold text-slate-400 self-center">+</div>

            {/* Lingkaran Pecahan (1/4) */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
                <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#b45309" strokeWidth="2" />
                {/* 1/4 diarsir */}
                <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#b45309" strokeWidth="1.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#b45309" strokeWidth="1.5" />
              </svg>
              <span className="text-[11px] font-bold text-amber-900 mt-1">1/4 Bagian</span>
            </div>
          </div>
          <div className="mt-3 text-xs font-semibold text-slate-700 text-center bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Nilai Arsiran = <span className="font-bold text-amber-900">2 satuan utuh dan 1/4 bagian</span>
          </div>
        </div>
      )}

      {/* 4. Compare Bars (Perbandingan 2 Balok Sejajar) */}
      {diagram.type === 'compare_bars' && (
        <div className="w-full max-w-md space-y-3">
          {(diagram.compareItems || [
            { label: 'Bangun I (3/5)', total: 5, shaded: 3, color: '#3b82f6' },
            { label: 'Bangun II (4/5)', total: 5, shaded: 4, color: '#10b981' },
          ]).map((item, idx) => {
            const partWidth = 280 / item.total;
            return (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>{item.label}</span>
                  <span className="text-slate-500 font-medium">
                    {item.shaded}/{item.total} diarsir
                  </span>
                </div>
                <svg viewBox="0 0 300 45" className="w-full h-auto drop-shadow-2xs">
                  {Array.from({ length: item.total }).map((_, i) => {
                    const isShaded = i < item.shaded;
                    return (
                      <rect
                        key={i}
                        x={10 + i * partWidth}
                        y={5}
                        width={partWidth}
                        height={35}
                        fill={isShaded ? item.color || '#3b82f6' : '#ffffff'}
                        stroke="#334155"
                        strokeWidth="1.8"
                        rx="2"
                      />
                    );
                  })}
                </svg>
              </div>
            );
          })}
        </div>
      )}

      {/* 5. Grid 100 (Petak Seratus untuk Desimal & Persen) */}
      {diagram.type === 'grid_100' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 220 220" className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-2xs">
            <rect x="10" y="10" width="200" height="200" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
            {(() => {
              const shaded = diagram.shadedParts || 35;
              const cells = [];
              const cellSize = 20;

              for (let row = 0; row < 10; row++) {
                for (let col = 0; col < 10; col++) {
                  const index = row * 10 + col;
                  const isShaded = index < shaded;

                  cells.push(
                    <rect
                      key={`${row}-${col}`}
                      x={10 + col * cellSize}
                      y={10 + row * cellSize}
                      width={cellSize}
                      height={cellSize}
                      fill={isShaded ? '#6366f1' : '#ffffff'}
                      stroke="#94a3b8"
                      strokeWidth="0.8"
                    />
                  );
                }
              }
              return cells;
            })()}
          </svg>
          <div className="mt-2 text-xs font-semibold text-slate-700 text-center">
            Jumlah petak terarsir: <span className="text-indigo-700 font-bold">{diagram.shadedParts || 35} dari 100 petak</span>
          </div>
        </div>
      )}

      {/* 6. Addition Model (Model Penjumlahan 2/7 + 3/7 = 5/7) */}
      {diagram.type === 'addition_model' && (
        <div className="w-full max-w-lg space-y-2 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full items-center">
            {/* Balok 1: 2/7 */}
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
              <span className="text-xs font-bold text-blue-800 block mb-1">2/7</span>
              <svg viewBox="0 0 140 30" className="w-full h-auto">
                {Array.from({ length: 7 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 20}
                    y={2}
                    width={20}
                    height={26}
                    fill={i < 2 ? '#3b82f6' : '#ffffff'}
                    stroke="#1e3a8a"
                    strokeWidth="1.2"
                  />
                ))}
              </svg>
            </div>

            {/* Balok 2: 3/7 */}
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
              <span className="text-xs font-bold text-emerald-800 block mb-1">3/7</span>
              <svg viewBox="0 0 140 30" className="w-full h-auto">
                {Array.from({ length: 7 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 20}
                    y={2}
                    width={20}
                    height={26}
                    fill={i < 3 ? '#10b981' : '#ffffff'}
                    stroke="#065f46"
                    strokeWidth="1.2"
                  />
                ))}
              </svg>
            </div>

            {/* Balok Hasil: 5/7 */}
            <div className="p-2.5 bg-white rounded-xl border-2 border-indigo-200 bg-indigo-50/40 text-center">
              <span className="text-xs font-bold text-indigo-900 block mb-1">Hasil: 5/7</span>
              <svg viewBox="0 0 140 30" className="w-full h-auto">
                {Array.from({ length: 7 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 20}
                    y={2}
                    width={20}
                    height={26}
                    fill={i < 2 ? '#3b82f6' : i < 5 ? '#10b981' : '#ffffff'}
                    stroke="#3730a3"
                    strokeWidth="1.2"
                  />
                ))}
              </svg>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic mt-1 text-center">
            Penyebut tetap (7 bagian), pembilang dijumlahkan (2 + 3 = 5 bagian)
          </p>
        </div>
      )}

      {/* 7. Number Line (Garis Bilangan Pecahan) */}
      {diagram.type === 'number_line' && (
        <div className="w-full max-w-lg flex flex-col items-center">
          <svg viewBox="0 0 360 85" className="w-full h-auto">
            {/* Garis horizontal utama */}
            <line x1="20" y1="40" x2="340" y2="40" stroke="#1e293b" strokeWidth="2.5" />
            <polygon points="15,40 22,35 22,45" fill="#1e293b" />
            <polygon points="345,40 338,35 338,45" fill="#1e293b" />

            {/* 8 Bagian: 0 s.d 8/8 (1) */}
            {(() => {
              const ticks = [];
              const step = 300 / 8;
              const points = [
                { num: 0, label: '0' },
                { num: 1, label: '1/8' },
                { num: 2, label: '2/8' },
                { num: 3, label: '3/8', highlight: true },
                { num: 4, label: '4/8' },
                { num: 5, label: '5/8', highlight: true },
                { num: 6, label: '6/8', highlight: true },
                { num: 7, label: '7/8' },
                { num: 8, label: '1' },
              ];

              points.forEach((pt) => {
                const x = 30 + pt.num * step;
                ticks.push(
                  <g key={pt.num}>
                    <line
                      x1={x}
                      y1={pt.highlight ? 28 : 34}
                      x2={x}
                      y2={pt.highlight ? 52 : 46}
                      stroke={pt.highlight ? '#2563eb' : '#475569'}
                      strokeWidth={pt.highlight ? 2.5 : 1.5}
                    />
                    {pt.highlight && (
                      <circle cx={x} cy={40} r={4.5} fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                    )}
                    <text
                      x={x}
                      y={65}
                      textAnchor="middle"
                      fill={pt.highlight ? '#1d4ed8' : '#64748b'}
                      fontSize={pt.highlight ? '12' : '10'}
                      fontWeight={pt.highlight ? 'bold' : 'normal'}
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              });
              return ticks;
            })()}
          </svg>
          <div className="mt-1 text-xs text-slate-600 text-center font-medium">
            Letak titik pada garis bilangan semakin ke kanan nilainya semakin besar
          </div>
        </div>
      )}

      {/* 8. Water Bottle (Botol Air Minum 10 Bagian) */}
      {diagram.type === 'water_bottle' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 160 210" className="w-36 h-48 sm:w-40 sm:h-52 drop-shadow-2xs">
            {/* Tutup Botol */}
            <rect x="68" y="10" width="24" height="15" rx="3" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
            {/* Leher Botol */}
            <path d="M 64 25 L 96 25 L 105 50 L 55 50 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            {/* Badan Botol */}
            <rect x="40" y="50" width="80" height="150" rx="10" fill="#f8fafc" stroke="#0284c7" strokeWidth="2.5" />

            {/* Air Awal (6/10 bagian) -> tinggi 90px */}
            <rect x="42" y="110" width="76" height="88" rx="8" fill="#38bdf8" fillOpacity="0.4" />

            {/* Sisa Air (4/10 bagian) -> tinggi 60px */}
            <rect x="42" y="140" width="76" height="58" rx="8" fill="#0284c7" fillOpacity="0.8" />

            {/* Skala 10 garis ukur */}
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 50 + (10 - i) * 15;
              return (
                <g key={i}>
                  <line x1="40" y1={y} x2="52" y2={y} stroke="#0369a1" strokeWidth="1.2" />
                  <text x="56" y={y + 3.5} fontSize="8" fill="#0369a1" fontWeight="bold">
                    {i}/10
                  </text>
                </g>
              );
            })}

            {/* Label Diminum */}
            <text x="125" y="128" fontSize="9" fill="#e11d48" fontWeight="bold">
              Diminum 2/10
            </text>
            <path d="M 122 125 L 115 125" stroke="#e11d48" strokeWidth="1.5" />

            {/* Label Sisa Air */}
            <text x="125" y="170" fontSize="9" fill="#0369a1" fontWeight="bold">
              Sisa 4/10
            </text>
            <path d="M 122 167 L 115 167" stroke="#0369a1" strokeWidth="1.5" />
          </svg>
          <div className="mt-2 text-xs font-semibold text-slate-700 text-center">
            Isi awal botol: <span className="text-sky-700 font-bold">6/10 Liter</span> • Diminum: <span className="text-rose-600 font-bold">2/10 Liter</span>
          </div>
        </div>
      )}
    </div>
  );
};
