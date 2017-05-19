export const updateMouse = (position) => {
  return {
    type: "UPDATE_POSITION",
    payload: position
  }
}

export function elementFloat() {

  let left = this.state.left
  let right = this.state.right
  let top = this.state.top
  let bottom = this.state.bottom
  let midX = left + ((right-left)/2)
  let midY = top
  let boundLeft = midX
  let boundRight = window.innerWidth - midX
  let boundTop = midY
  let boundBottom = window.innerHeight - midY
  let relativeX = this.props.x - midX
  let relativeY = this.props.y - midY
  let percentageX
  let percentageY
  if (relativeX >= 0) {
    percentageX = relativeX / boundRight
  } else {
    percentageX = relativeX / boundLeft
  }
  if (relativeY <= 0) {
    percentageY = relativeY / boundTop
  } else {
    percentageY = relativeY / boundBottom
  }
  let style={"transform":`rotateX(${percentageY * -20}deg) rotateY(${percentageX * 20}deg) scale(1)`}
  return style

}
export function elementFloatX() {
  if (this.state.alpha !== null) {
    let style={"transform":`rotateX(${this.state.gamma/-1.5}deg) rotateY(${this.state.beta/1.5 }deg) scale(${6})`}
    return style
  } else {
    let left = this.state.left
    let right = this.state.right
    let top = this.state.top
    let bottom = this.state.bottom
    let midX = left + ((right-left)/2)
    let midY = top
    let boundLeft = midX
    let boundRight = window.innerWidth - midX
    let boundTop = midY
    let boundBottom = window.innerHeight - midY
    let relativeX = this.props.x - midX
    let relativeY = this.props.y - midY
    let percentageX
    let percentageY
    if (relativeX >= 0) {
      percentageX = relativeX / boundRight
    } else {
      percentageX = relativeX / boundLeft
    }
    if (relativeY <= 0) {
      percentageY = relativeY / boundTop
    } else {
      percentageY = relativeY / boundBottom
    }
    let style={"transform":`rotateX(${percentageY * -40}deg) rotateY(${percentageX * 30}deg) scale(4)`}
    return style
  }
}
export function elementFloatY() {
  if (this.state.alpha !== null) {
    let style={"transform":`rotateX(${this.state.gamma/-2}deg) rotateY(${this.state.beta/2 }deg) scale(${1})`, "boxShadow": `${this.state.gamma/-2}px ${this.state.beta/2 }px 62px -1px rgba(255,196,255,1)`}
    return style
  } else {
  let left = this.state.left
  let right = this.state.right
  let top = this.state.top
  let bottom = this.state.bottom
  let midX = left + ((right-left)/2)
  let midY = top
  let boundLeft = midX
  let boundRight = window.innerWidth - midX
  let boundTop = midY
  let boundBottom = window.innerHeight - midY
  let relativeX = this.props.x - midX
  let relativeY = this.props.y - midY
  let percentageX
  let percentageY
  if (relativeX >= 0) {
    percentageX = relativeX / boundRight
  } else {
    percentageX = relativeX / boundLeft
  }
  if (relativeY <= 0) {
    percentageY = relativeY / boundTop
  } else {
    percentageY = relativeY / boundBottom
  }
  let style={"transform":`rotateX(${percentageY * -40}deg) rotateY(${percentageX * 40}deg) scale(1)`, "boxShadow": `${percentageY * -40}px ${percentageX * 40}px 62px -1px rgba(255,196,255,1)`}
  return style
}
}

export function shadowFloat() {
  let left = this.state.left
  let right = this.state.right
  let top = this.state.top
  let bottom = this.state.bottom
  let midX = left + ((right-left)/2)
  let midY = top
  let boundLeft = midX
  let boundRight = window.innerWidth - midX
  let boundTop = midY
  let boundBottom = window.innerHeight - midY
  let relativeX = this.props.x - midX
  let relativeY = this.props.y - midY
  let percentageX
  let percentageY
  if (relativeX >= 0) {
    percentageX = relativeX / boundRight
  } else {
    percentageX = relativeX / boundLeft
  }
  if (relativeY <= 0) {
    percentageY = relativeY / boundTop
  } else {
    percentageY = relativeY / boundBottom
  }

  let style={'boxShadow':`${percentageY * -40}px ${percentageX * 40}px 62px -70px rgba(255,196,255,1)`}
  return style
}
