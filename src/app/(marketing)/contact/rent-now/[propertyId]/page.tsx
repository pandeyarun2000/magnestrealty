import { Metadata } from 'next';
import RentalApplicationForm from '../../RentalApplicationForm';

type PageProps = {
  params: { propertyId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};


// Dynamically generate metadata based on propertyId
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { propertyId } = params;
  return {
    title: `Rent Property ${propertyId}`,
    description: `Apply to rent property with ID: ${propertyId}`,
  };
}

// Page Component for rental application
export default function RentNowPage({ params }: { params: { propertyId: string } }) {
  const { propertyId } = params;

  if (!propertyId) {
    return <div>Error: Property ID is missing.</div>;
  }

  return <RentalApplicationForm propertyId={propertyId} />;
}
