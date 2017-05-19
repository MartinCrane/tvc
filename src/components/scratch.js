const og = (      <Col sm={12} md={6} lg={4}>
        <div className="Title">
          <img src={require(`../images/${this.props.title.image_url}`)}></img>
          <div className="TitleDetails">
            <h1>{this.props.title.name}</h1>
            <h2>{this.props.title.year}</h2>
            <h3>{this.props.title.credit}</h3>
            <h3>{this.props.title.director.name}</h3>

          </div>
        </div>
      </Col>
    )


    let portfolio = this.props.portfolio.map((title, index) =>
                                                <div>
                                                  <Title title={title} key={index}/>
                                                </div>
                                              )
