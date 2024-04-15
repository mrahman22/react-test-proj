export interface SortButtonProps {
  active: boolean;
}

export interface SortingButtonsProps {
  sortedBy: string;
  sortBy: (type: string) => void;
}
