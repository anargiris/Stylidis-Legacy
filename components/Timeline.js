import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import { motion } from "framer-motion";

const TimelineGrid = () => {
  const customTheme = {
    yearColor: "#405b73",
    lineColor: "#d0cdc4",
    dotColor: "#262626",
    borderDotColor: "#d0cdc4",
    titleColor: "#405b73",
    subtitleColor: "#bf9765",
    textColor: "#262626",
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.9,
          delay: 0.3,
        },
      }}
    >
      <Timeline theme={customTheme} dateFormat="ll">
        <Container>
          <YearContent startDate="2020/06" endDate="2020/09" />
          <BodyContent>
            <Section title="Start">
              <Description
                variant="subtitle"
                text="HTML/CSS learning at freeCodeCamp."
              />
              <Description text="Finished the Responsive Web Design curriculum and got certified." />
            </Section>

            <Section title="JavaScript">
              <Description variant="subtitle" text="Oh sh...." />
              <Description text="Ventured into JavaScript Algorithms and Data Structures. Also got the certification." />
            </Section>
          </BodyContent>
        </Container>
        <Container>
          <YearContent startDate="2020/10" endDate="2021/01" />
          <BodyContent>
            <Section title="Frameworks">
              <Description variant="subtitle" text="React." />
              <Description text="Started learning React and doing projects using it. Also started using Tailwind." />
            </Section>

            <Section title="Full stack">
              <Description variant="subtitle" text="Node/Express" />
              <Description text="Studied server and backend logic using Node. Started going deep with the learning and discovering new technologies." />
            </Section>
          </BodyContent>
        </Container>
        <Container>
          <YearContent startDate="2021/01" endDate="2021/03" />
          <BodyContent>
            <Section title="Applying to jobs">
              <Description variant="subtitle" text="..with 0 experience." />
              <Description text="Started applying to jobs with no past experience, but some projects to showcase and a portfolio." />
            </Section>

            <Section title="First Job!">
              <Description variant="subtitle" text="Ecommerce developer" />
              <Description text="Got my first developer job at an office, developing online stores using CloudCart." />
            </Section>
          </BodyContent>
        </Container>
        <Container>
          <YearContent startDate="2021/07" />
          <BodyContent>
            <Section title="Started Freelancing">
              <Description
                variant="subtitle"
                text="Based on the website you are on."
              />
              <Description text="Built this website and started looking for clients!" />
            </Section>
          </BodyContent>
        </Container>
      </Timeline>
    </motion.span>
  );
};

export default TimelineGrid;
