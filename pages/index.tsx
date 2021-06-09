import Header from '../components/Header';
import SectionMenu from '../components/SectionMenu';
import Planet from '../components/Planet';
import Information from '../components/Information';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionMenu />
        <Planet />
        <Information />
      </main>
    </>
  );
}
