
class Alert extends React.Component{
  constructor(props){
    super(props)
  }

  declOfNum(legthid) {
    if(legthid == 1){ return 'символ'}
    const endNumber= legthid % 10
    if(legthid > 10 && legthid < 20){
      return 'символов'
    }
    console.log(legthid)
    if ( endNumber == 2 || endNumber == 3 || endNumber == 4 ){
      return 'символа'
    }
    if ( endNumber == 1){
      return 'символ'
    }
    return 'символов'
  }

  getTextAlert(legthid){
    return `Новый ID: ${legthid} ` + this.declOfNum(legthid)
  }

  render(){
    alertify.log(this.getTextAlert(this.props.lengthid), "", 10000)
    return (
      <div></div>
    )
  }
}
