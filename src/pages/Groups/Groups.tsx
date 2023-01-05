import Group from "../../components/templates/Group/Group";
import GroupsData from "./Data/GroupsData";

interface ICard {
  title: string;
  linkTo: string;
  img: string;
}

interface IGroup {
  state: string;
}

const Groups: React.FC<IGroup> = ({ state }) => {
  const group = GroupsData.find((g) => g.state === state);
  return <Group title={group!.title} cards={group!.cards}></Group>;
};

export default Groups;
