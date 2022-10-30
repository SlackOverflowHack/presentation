import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen p-0 m-0 font-JosefinSans'>
      <Head>
        <title>SportSwipe</title>
      </Head>
      <section className='h-screen w-full relative -z-10'>
        <Image
          src='/collage_desktop.png'
          alt='splash'
          objectFit='cover'
          layout='fill'
          className='w-full h-full'
        />
        <div className='flex flex-col items-center justify-center h-full w-full absolute z-10 gap-5'>
          <div className='w-64 h-64'>
            <Image
              src='/logo.png'
              alt='logo'
              layout='responsive'
              height={512}
              width={512}
              className='z-10'
            />
          </div>
          <span className='text-white text-xl'>Your date with health</span>
        </div>
      </section>
      <section className='flex flex-row justify-evenly py-5 bg-[#EFEFEF]'>
        <div className='px-24 max-w-[60%] gap-5 flex flex-col'>
          <p>
            Deutschland bewegt sich zu wenig. Die meisten Tätigkeiten finden
            sitzend oder liegend statt, auf dieses Problem weisen Studien schon
            seit Jahren hin, dabei sind Sport und Bewegung für die Gesundheit
            jedes Einzelnen extrem wichtig. Ein Problem dabei ist, dass
            bezahlbare Sportangebote schnell ausgebucht sind, aber dann nicht
            immer von allen Teilnehmern besucht werden, weshalb immer wieder
            Plätze frei bleiben. Doch hier kommt die Lösung -{' '}
            <span className='text-[#219A31] font-bold'>SportSwipe</span>.
          </p>
          <p>
            Mit Hilfe einer einfachen Bedienung bestehend aus Swipes nach links
            oder rechts können User Interesse an einem nicht komplett
            ausgebuchten Sportkurs äußern und diesen{' '}
            <span className='text-[#219A31]'>kurzfristig und kostenfrei </span>
            besuchen. Alternativ können Sie auch über die Buttons auf der
            Unterseite likes oder dislikes vergeben. Durch die App können Kurse
            eher ausgebucht und die Ressourcenverschwendung reduziert werden.
          </p>
          <p>
            Darüber hinaus kann jeder Nutzer auch selbst Kurse erstellen, wenn
            er zum Beispiel Lust auf eine Runde Fußball hat und somit andere zu
            mehr Bewegung ambitionieren
          </p>
        </div>
        <div className='relative w-1/3 flex items-start justify-center'>
          <Image
            alt='phone_screenshot_1'
            src='/1. Mockup.png'
            height='400'
            width='200'
            className='mx-auto absolute top-0 right-0'
          />
          <span className='text-green-700 absolute bottom-16 -left-20 w-32 text-sm font-bold'>
            Bei der Anmeldung gibt der User Tags an, welche auf den Karten
            dargestellt werden, um Transparenz beim Kursangebot zu schaffen.
          </span>
        </div>
      </section>
      <section className='grid grid-cols-2 bg-amber-200/10 px-[115px] py-5 gap-5'>
        <span>
          Nach der Registrierung mit Namen, Geburtstag und anderen Daten erhält
          der User über einen Login Zugriff auf die App.
        </span>
        <span>
          Der Nutzer kann mit der Kalenderfunktion immer im Blick behalten, wann
          welche seiner favorisierten Kurse stattfinden und ob er angenommen
          wurde.
        </span>
        <div className='relative pt-5 flex flex-col items-center justify-start'>
          <Image
            src='/2. Mockup.png'
            width='200'
            height='400'
            alt='phone_screenshot_2'
          />
        </div>
        <div className='relative pt-5 flex flex-col items-center justify-start'>
          <Image
            src='/3. Mockup.png'
            width='200'
            height='400'
            alt='phone_screenshot_3'
          />
        </div>
      </section>
      <section className='bg-[#D9D9D9] flex flex-col p-5 gap-5'>
        <h1 className='font-bold text-5xl px-12'>Monetarisierung</h1>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col items-center justify-start px-20'>
            <div className='relative'>
              <Image alt='ad icon' src='/werbung.png' height='64' width='80' />
            </div>
            <span>
              Durch das gezielte Schalten von Werbung zwischen den einzelnen
              Swipes als eigene Karten sollen Umsätze erzielt werden. Ein
              besonderes Augenmerk liegt hierbei jedoch auf den Werbetreibenden
              selbst. Es sollen ausschließlich Fitness-/Gesundheitsinteressierte
              Unternehmen Werbung schalten können.
            </span>
          </div>
          <div className='flex flex-col items-center justify-start px-20'>
            <div className='relative'>
              <Image alt='ad icon' src='/premium.png' height='64' width='80' />
            </div>
            <span>
              Das Anbieten einer Premium-Lösung für Kursanbieter soll eine
              weitere Umsatzquelle darstellen. Premium-Kunden sollen mehr Kurse
              als andere Anbieter auf der Plattform veröffentlichen können.
              Außerdem sollen sie die Möglichkeit erhalten, bestimmte Kurse
              öfter bei Kunden anzeigen zu lassen.
            </span>
          </div>
        </div>
      </section>
      <section className='bg-[#EFEFEF] flex flex-col p-5 gap-5'>
        <h1 className='font-bold text-5xl pl-12'>Technologien</h1>
        <div className='grid grid-cols-3 px-20'>
          <div className='flex flex-col gap-5 items-center justify-start'>
            <h3 className='text-2xl text-[#219A31]'>Frontend</h3>
            <div className='flex flex-col items-center justify-start'>
              <span>React Native</span>
              <span>Expo</span>
              <span>NextJS</span>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center justify-start'>
            <h3 className='text-2xl text-[#219A31]'>Frontend</h3>
            <div className='flex flex-col items-center justify-start'>
              <span>React Native</span>
              <span>Expo</span>
              <span>NextJS</span>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center justify-start'>
            <h3 className='text-2xl text-[#219A31]'>Frontend</h3>
            <div className='flex flex-col items-center justify-start'>
              <span>React Native</span>
              <span>Expo</span>
              <span>NextJS</span>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-start justify-start gap-5 bg-gray-600/30 px-20 py-5'>
        <p>
          Die App liest Daten DSGVO-konform aus der Firebase
          FireStore-Datenbank. Alle Änderungsanfragen von der App werden zum
          Laravel-Backend gesendet. Dort werden Anfragedaten sowie
          Nutzerberechtigungen geprüft. Ist die Anfrage korrekt werden die Daten
          in der FireStore-Datenbank aktualisiert.
        </p>
        <p>
          Durch die Nutzung von React Native zusammen mit der Expo.JS Library
          können wir die App mit nur einer Codebase auf den drei gängigsten
          Plattformen veröffentlichen: Android, iOS und als Website.
        </p>
        <p>
          Die App ist für Angebots-Nutzer gedacht. Zusätzlich zur App gibt es
          die Kursverwaltung. Diese ist mit Next.JS realisiert. Mit ihr können
          Kursleiter, welche nicht bei VHS oder ähnlichen Betreibern agieren,
          eigene Kurse einstellen und deren Mitglieder verwalten.
        </p>
      </section>
    </div>
  );
}
