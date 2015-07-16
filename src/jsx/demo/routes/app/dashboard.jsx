var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody className='text-center'>
                    <h1>Dashboard</h1>
                  </PanelBody>
                </Panel>
              </PanelContainer>
             <PanelContainer noOverflow controlStyles='bg-orange fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Current Potential Issues</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table striped bordered className='tablesaw' data-mode="swipe" data-sortable data-sortable-switch data-mode-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-sortable-default-col data-priority='persist'>LAN IP</th>
                                <th data-sortable-col data-priority='3'>Type</th>
                                <th data-sortable-col data-priority='3'>Hash Rate</th>
                                <th data-sortable-col data-priority='2'>Temperature</th>
                                <th data-sortable-col data-priority='1'>Socket Voltage</th>
                                <th data-sortable-col data-priority='4'>Fan Speed</th>
                                <th data-sortable-col data-priority='4'>Start Voltage</th>
                                <th data-sortable-col data-priority='4'>Maximum Voltage</th>
                                <th data-sortable-col data-priority='4'>Maximum Wattage</th>
                                <th data-sortable-col data-priority='4'>Last Pinged</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                     </Grid>
                   </PanelBody>
                  </Panel>
                </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = React.addons.classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
});

module.exports = Page;
