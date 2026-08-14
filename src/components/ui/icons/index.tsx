import { Icons, type IconProps } from "./types";
import SunIcon from "./sun";
import MoonIcon from "./moon";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, className }: Props) {
  const props = { className };

  switch (type) {
    case Icons.Sun:
      return <SunIcon {...props} />;

    case Icons.Moon:
      return <MoonIcon {...props} />;
  }
}
