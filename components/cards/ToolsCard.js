import Link from "next/link";

const ToolsCard = ({ toolLink, img, name, desc, tag }) => {
  // console.log(toolLink);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link href={toolLink} target="_blank">
        <div className="card-offer hover-up min-height-360">
          <div className="card-image d-flex align-items-center card-space-between">
            {img}
            {tag && <label className=" card-label">{tag}</label>}
          </div>
          <div className="card-info">
            <h4 className="color-brand-1 mb-15">{name}</h4>
            <p className="font-md color-grey-500 mb-15">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToolsCard;
