/**
 * Definisi Type & Interface Aplikasi Tes Sumatif
 */

export type QuestionType = 'pg' | 'pgk' | 'pgk_kategori';
export type Difficulty = 'Mudah' | 'Sedang' | 'Sukar';

export interface StudentBirthDate {
  hari: string;
  bulan: string;
  tahun: string;
}

export interface StudentIdentity {
  nama: string;
  noAbsen: string;
  tglLahir: StudentBirthDate;
}

export interface OptionItem {
  id: string; // e.g. 'A', 'B', 'C', 'D'
  text: string;
}

export interface StatementItem {
  id: string; // e.g. 's1', 's2', 's3'
  text: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export type DiagramType =
  | 'circle_fraction'
  | 'bar_fraction'
  | 'mixed_fraction'
  | 'compare_bars'
  | 'grid_100'
  | 'addition_model'
  | 'number_line'
  | 'water_bottle';

export interface QuestionDiagram {
  type: DiagramType;
  caption?: string;
  totalParts?: number;
  shadedParts?: number;
  // Untuk pecahan campuran
  wholeCount?: number;
  fractionParts?: number;
  fractionShaded?: number;
  // Untuk perbandingan balok pecahan
  compareItems?: Array<{
    label: string;
    total: number;
    shaded: number;
    color?: string;
  }>;
  // Untuk model penjumlahan
  term1?: { total: number; shaded: number; label: string };
  term2?: { total: number; shaded: number; label: string };
  resultTerm?: { total: number; shaded: number; label: string };
  // Untuk garis bilangan
  divisions?: number;
  markedPoints?: Array<{
    numerator: number;
    label?: string;
    highlight?: boolean;
  }>;
  // Untuk botol / takaran air
  bottleFilled?: number; // persepuluh
  bottleDrunk?: number; // persepuluh
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  diagram?: QuestionDiagram;
  options?: OptionItem[]; // Untuk 'pg' (4 opsi) dan 'pgk' (3 atau 4 opsi)
  statements?: StatementItem[]; // Untuk 'pgk_kategori' (3 pernyataan)
  correctAnswer?: string | string[]; // string untuk 'pg' (e.g. 'B'), array untuk 'pgk' (e.g. ['A', 'C'])
  difficulty: Difficulty;
  explanation: string;
  topic: string;
}

export interface ShuffledQuestion extends Question {
  originalQuestionId: number;
  shuffledOptions?: OptionItem[];
}

export type AnswerValue = string | string[] | Record<string, boolean>;

export interface ExamResult {
  id?: string;
  timestamp: string;
  nama: string;
  noAbsen: string;
  kelas: string;
  tglLahir?: string;
  benar: number;
  salah: number;
  nilai: number;
  status: 'Lulus' | 'Belum Lulus';
  detailJawaban?: Record<number, AnswerValue>;
}

export type AppStage = 1 | 2 | 3 | 4;
