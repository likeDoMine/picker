import { GenerateConfig } from './generate';

export interface Locale {
  locale: string;

  // ===================== Date Panel =====================
  /** Display month before year in date panel header */
  monthBeforeYear?: boolean;
  yearFormat: string;
  monthFormat?: string;

  today: string;
  now: string;
  backToToday: string;
  ok: string;
  timeSelect: string;
  dateSelect: string;
  weekSelect?: string;
  clear: string;
  month: string;
  year: string;
  previousMonth: string;
  nextMonth: string;
  monthSelect: string;
  yearSelect: string;
  decadeSelect: string;

  dayFormat: string;
  dateFormat: string;
  dateTimeFormat: string;
  previousYear: string;
  nextYear: string;
  previousDecade: string;
  nextDecade: string;
  previousCentury: string;
  nextCentury: string;

  shortWeekDays?: string[];
  shortMonths?: string[];
}

export type PanelMode =
  | 'time'
  | 'datetime'
  | 'date'
  | 'week'
  | 'month'
  | 'year'
  | 'decade';

export type PickerMode = Exclude<PanelMode, 'datetime' | 'decade'>;

export interface PanelRefProps {
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onClose?: () => void;
}

export type NullableDateType<DateType> = DateType | null | undefined;

export interface PanelSharedProps<DateType> {
  prefixCls: string;
  generateConfig: GenerateConfig<DateType>;
  value?: NullableDateType<DateType>;
  viewDate: DateType;
  /** [Legacy] Set default display picker view date */
  defaultPickerValue?: DateType;
  locale: Locale;
  disabledDate?: (date: DateType) => boolean;

  /**
   * Typescript can not handle generic type so we can not use `forwardRef` here.
   * Thus, move ref into operationRef.
   * This is little hack which should refactor after typescript support.
   */
  operationRef: React.MutableRefObject<PanelRefProps>;

  onSelect: (value: DateType) => void;
  onViewDateChange: (value: DateType) => void;
  onPanelChange: (mode: PanelMode, viewValue: DateType) => void;
}

export interface DisabledTimes {
  disabledHours?: () => number[];
  disabledMinutes?: (hour: number) => number[];
  disabledSeconds?: (hour: number, minute: number) => number[];
}

export type DisabledTime<DateType> = (date: DateType | null) => DisabledTimes;
