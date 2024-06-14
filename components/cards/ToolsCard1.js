const ToolsCard1 = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="card-offer hover-up min-height-360">
        <div className="card-image">{props.img}</div>
        <div className="card-info">
          <h4 className="color-brand-1 mb-15">{props.name}</h4>
          <p className="font-md color-grey-500 mb-15">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard1;
