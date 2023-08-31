import { HeartIcon, StarsIcon, LightningIcon } from "@components/icons";
import { Cards, Card } from "nextra-theme-docs";

type Props = {
  v: string;
  m: string;
  a: string;
};

export function VMS(props: Props) {
  const { v = "10", m = "10", a = "10" } = props;

  return (
    <>
      <Cards>
        <Card icon={<HeartIcon />} title={`Vida: ${v}`} href="#">
          {v}
        </Card>
        <Card icon={<StarsIcon />} title={`Mana: ${m}`} href="#">
          {m}
        </Card>
        <Card icon={<LightningIcon />} title={`Adrenalina: ${a}`} href="#">
          {a}
        </Card>
      </Cards>

      <style jsx>{`
        :global(.nextra-cards .nextra-card:nth-child(1)) {
          background-color: rgb(159 18 57);
          color: rgb(251 113 133);
        }
        :global(.nextra-cards .nextra-card:nth-child(1) svg) {
          color: rgb(251 113 133);
        }
        :global(.nextra-cards .nextra-card:nth-child(2)) {
          background-color: rgb(7 89 133);
          color: rgb(56 189 248);
        }
        :global(.nextra-cards .nextra-card:nth-child(2) svg) {
          color: rgb(56 189 248);
        }
        :global(.nextra-cards .nextra-card:nth-child(3)) {
          background-color: rgb(63 98 18);
          color: rgb(163 230 53);
        }
        :global(.nextra-cards .nextra-card:nth-child(3) svg) {
          color: rgb(163 230 53);
        }
      `}</style>
    </>
  );
}
