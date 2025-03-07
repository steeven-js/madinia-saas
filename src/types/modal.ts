import { ReactNode } from 'react';

// @project
import { ModalSize } from '@/enum';

export interface ModalHeader {
  title?: string;
  subheader?: string;
  closeButton?: boolean;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  maxWidth?: ModalSize;
  header?: ModalHeader;
  footer?: ReactNode;
  modalContent: ReactNode;
}
