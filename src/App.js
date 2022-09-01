import Header from "./component/header";
import Footer from "./component/footer";
import ScheduleCard from "./component/schedule-card";
import MeetupCard from "./component/meetup-card";
import CommentCard from "./component/comment-card";
import { dataSchedule } from "./utils/card-data";
import { Main, ScheduleContainer, Section } from "./style";
import MemberCard from "./component/member-card";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <MeetupCard
            title="Hacktiv8 Meetup"
            location="Jakarta, Indonesia"
            countMember={1078}
            organizers="Arrizal"
            imageUrl="assets/images/hactiv8-logo.png"
          />
        </Section>
        <Section>
          <h2>Next Meetup</h2>
          <CommentCard
            title="Awesome meetup and event"
            date="25 January 2019"
            content="Eu qui ipsum eu pariatur deserunt exercitation non fugiat cillum laborum eiusmod. Duis aliqua excepteur minim reprehenderit cupidatat sunt laborum. Velit minim dolor velit exercitation deserunt dolor eiusmod esse cillum occaecat eiusmod consectetur. Officia laborum quis qui est sit ex eu laboris occaecat duis ut magna sint fugiat. Ad elit velit esse enim duis duis esse laborum proident officia mollit ad officia Lorem. Id ex magna adipisicing qui. Ad pariatur esse dolore nostrud et deserunt id aute tempor aliquip officia culpa minim irure."
          />
        </Section>
        <Section>
          <h2>About Meetup</h2>
          <p>
            Amet voluptate et irure Lorem. Aliquip ut veniam nostrud occaecat
            ipsum. Officia eu pariatur aute quis velit nostrud elit nostrud
            aliquip minim incididunt. Laborum velit laborum adipisicing commodo
            eu id duis commodo. Magna ea culpa culpa ea proident. Laborum culpa
            sit ad mollit culpa fugiat est cupidatat cupidatat do nulla laboris
            qui. Tempor cillum aliquip ullamco fugiat occaecat sit dolore aute
            consectetur commodo mollit. Officia dolor cillum duis aliqua mollit
            sit adipisicing excepteur nisi consectetur proident et. Est cillum
            voluptate veniam commodo cupidatat esse adipisicing. Mollit nulla
            eiusmod ex anim dolore esse irure magna sit aliqua occaecat ea
            laborum duis. Culpa aute est id voluptate enim cupidatat adipisicing
            veniam et elit minim anim consectetur.
          </p>
        </Section>
        <Section>
          <h2>Members</h2>
          <MemberCard
            name="Adhy Wiranata"
            countMember={4}
            imageSrc="assets/images/hactiv8-logo.png"
          />
        </Section>
        <Section>
          <h2>Past Meetup</h2>
          <ScheduleContainer>
            {dataSchedule.map((value) => (
              <ScheduleCard
                date={value.date}
                content={value.content}
                countWent={value.countWent}
              />
            ))}
          </ScheduleContainer>
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default App;
