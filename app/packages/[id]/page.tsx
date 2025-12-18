import PackageDetails from "../../components/PackageDetails";

interface Props {
  params: { _id: string };
}

export default function PackagePage({ params }: Props) {
  return <PackageDetails packageId={params._id} />;
}
