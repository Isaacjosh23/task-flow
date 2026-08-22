import { Icons, type IconProps } from "./types";
import SunIcon from "./sun";
import MoonIcon from "./moon";
import PlusIcon from "./plus";
import TrashIcon from "./trash";
import DotIcon from "./dots";
import CalendarIcon from "./calendar";
import DateCalendarIcon from "./date-calendar";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, className }: Props) {
  const props = { className };

  switch (type) {
    case Icons.Calendar:
      return <CalendarIcon {...props} />;

    case Icons.DateCalender:
      return <DateCalendarIcon {...props} />;

    case Icons.Dot:
      return <DotIcon {...props} />;

    case Icons.Moon:
      return <MoonIcon {...props} />;

    case Icons.Plus:
      return <PlusIcon {...props} />;

    case Icons.Sun:
      return <SunIcon {...props} />;

    case Icons.Trash:
      return <TrashIcon {...props} />;
  }
}
