export interface ModalRemoveItemProps {
    item: {
        id: string;
        name: string;
        description: string;
        category?: string;
    };
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}