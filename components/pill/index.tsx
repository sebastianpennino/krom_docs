import styles from "./style.module.css";

type ValidType = "p" | "u" | "s" | "h" | "c" | "ex" | "eo";

type Props = {
  type: ValidType;
};

const abbvMap: Record<ValidType, string> = {
  p: "Pasivo",
  u: "Mejora",
  s: "Acción especial",
  h: "Habilidad única",
  c: "Tarjeta",
  ex: "Extenuante",
  eo: "Extraordinario",
};

const descMap: Record<ValidType, string> = {
  p: "Efecto continuo que está presente de forma automática",
  u: "Perfecciona, enriquece o enmienda una mecánica existente. Como ser: maniobras, penalizaciones, tiradas o magias",
  s: "Es una acción activada por el personaje, que se resuelve bajo su propio set de reglas",
  h: "Es una habilidad que solo puede ser obtenida por historial",
  c: "No requerien tiradas, siempre que se cumplan sus condiciones, suceden.",
  ex: "Solo se puede hacer una única vez por combate",
  eo: "Solo se puede hacer una única vez por sesión / mesa de juego",
};

const colorMap: Record<ValidType, [string, string]> = {
  p: ["green", "green"],
  u: ["orange", "orange"],
  s: ["purple", "purple"],
  h: ["grey", "grey"],
  c: ["blue", "blue"],
  ex: ["red", "red"],
  eo: ["darkRed", "darkRed"],
};

export function Pill({ type = "s" }: Props) {
  return (
    <span
      style={{ "--lcolor": colorMap[type][0], "--dcolor": colorMap[type][1] }}
      className={styles.pill}
      title={descMap[type]}
    >
      {abbvMap[type]}
    </span>
  );
}

type PillListProps = {
  types: ValidType[];
};

export function PillList({ types }: PillListProps) {
  return (
    <>
      {types.map((t, i) => {
        <Pill type={t} key={i} />;
      })}
    </>
  );
}
