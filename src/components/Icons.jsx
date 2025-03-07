import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFileHtmlLight, PiFileCssLight } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiChakraui, SiExpress, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

// Lista de iconos con nombres
const icons = [
  { icon: <PiFileHtmlLight />, name: "HTML" },
  { icon: <PiFileCssLight />, name: "CSS" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <BiLogoTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiChakraui />, name: "Chakra UI" },
  { icon: <IoLogoNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <GrMysql />, name: "MySQL" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <DiIllustrator />, name: "Illustrator" },
  { icon: <DiPhotoshop />, name: "Photoshop" },
];

// Duplicar íconos para el carrusel infinito con `map()` y clave única
export const duplicateIcons = [
  ...icons,
  ...icons.map((icon, index) => ({ ...icon, id: `dup1-${index}` })),
  ...icons.map((icon, index) => ({ ...icon, id: `dup2-${index}` })),
];

export { icons };
