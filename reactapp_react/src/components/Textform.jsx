function TextForm(props) {
    return (
        <>
        <div className="mb-3 row">
  <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">Email</label>
  <div className="col-sm-10">
    <input type="text" readonly className="htmlForm-control-plaintext" id="staticEmail" value="email@example.com"/>
  </div>
</div>
<div className="mb-3 row">
  <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">{props.pass}</label>
  <div className="col-sm-10">
    <input type="password" className="form control border border-black-1000" id="inputPassword" />
  </div>
</div>
        </>
    )
}
export default TextForm