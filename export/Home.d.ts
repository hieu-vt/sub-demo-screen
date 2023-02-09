interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
interface Props {
  title: string;
  subtitle?: string;

  onGetData: () => Promise<Array<TodoItem>>;
}

declare const HomeComponent: React.FC<Props>;

export default HomeComponent;
