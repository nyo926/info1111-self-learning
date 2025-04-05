import Link from 'next/link';
import CheckListItem from '../components/CheckListItem';

export default function Home() {
  const checklist = [
    {
      title: "Owners Corporation Composition",
      description: "Ensure that the Owners Corporation is properly composed according to the act and is responsible for management and meetings."
    },
    {
      title: "Meeting Proceedings",
      description: "Confirm that the Annual General Meeting and other meetings are conducted as per the scheduled guidelines."
    },
    {
      title: "Financial Management",
      description: "Verify that the administrative and capital works funds are managed correctly, including budget planning and financial reporting."
    }
  ];

  

  return <div>Hello, world!</div>;

  
}
