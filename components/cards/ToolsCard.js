import Link from "next/link";

const ToolsCard = ({ toolLink, img, name, desc, tag }) => {
  console.log(toolLink);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link href={toolLink}>
        <div className="card-offer hover-up min-height-360">
          <div className="card-image">{img}</div>
          <div className="card-info">
            <h4 className="color-brand-1 mb-15">{name}</h4>
            {tag && <label className="lbl-border">{tag}</label>}
            <p className="font-md color-grey-500 mb-15">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToolsCard;
