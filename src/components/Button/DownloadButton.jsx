import { PrimaryButton } from './Button';

export default function DownloadButton() {
  const handleOnClick = () => {
    alert('TODO: open playstore/appstore');
  };
  return <PrimaryButton onClick={handleOnClick}>Download the app</PrimaryButton>;
}
