import { NotFoundPage } from "../../_components";

const page = ({ params }: { params: { id: string } }) => {
  const searchInput = decodeURI(params.id);

  return (
    <div>
      <NotFoundPage searchInput={searchInput} />
    </div>
  );
};

export default page;
