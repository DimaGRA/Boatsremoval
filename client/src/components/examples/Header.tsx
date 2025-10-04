import Header from '../Header';

export default function HeaderExample() {
  return <Header onLanguageChange={(lang) => console.log('Language changed to:', lang)} currentLanguage="en" />;
}