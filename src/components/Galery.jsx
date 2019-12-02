import React from 'react'
import GaleryItem from '../components/GaleryItem'
import GaleryItemShow from './GaleryItemShow'

// Styles
import "../assets/css/galery.css"

// Data
const data = [{
	id: 1,
	image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t31.0-0/p180x540/23735990_1418755964913417_636736046399536476_o.jpg?_nc_cat=106&_nc_ohc=Fdp_b554KTkAQl7T01RqGBwyzBsUqnBHdmnunZ8jTn8mxiY760ifEurtA&_nc_ht=scontent.fclo1-2.fna&oh=9059db9daf2e5046d08547b61f99426c&oe=5E84A0B8"
}, {
	id: 2,
	image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t31.0-8/p720x720/23736248_1418755178246829_5637229846131261928_o.jpg?_nc_cat=103&_nc_ohc=kTxxQMavKyIAQkOty8IXvybqFagdflUzC7GRNCxwwdlL-00vKv7qwzaAw&_nc_ht=scontent.fclo1-1.fna&oh=e7335a5f0f7d641b7da17e49ba843ac7&oe=5E843555"
}, {
	id: 3,
	image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t31.0-8/s960x960/23783879_1418755174913496_1828613137956226725_o.jpg?_nc_cat=105&_nc_ohc=gInZqoaRz-IAQncS1NX4TuovPwSdpC4km0dlNpzH324mSAyO6hc9zdxsA&_nc_ht=scontent.fclo1-2.fna&oh=bcba276e8d614163735212f6ef65e295&oe=5E7C2AA2"
}, {
	id: 4,
	image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t31.0-8/s960x960/19243205_1274455006010181_6285058092119967837_o.jpg?_nc_cat=105&_nc_ohc=E4iYQzLIhOsAQljkX9-INjAivuMg245n-p3_6kM-Hf3UxYVdW-w4Z2Buw&_nc_ht=scontent.fclo1-2.fna&oh=80cae1520283d42642b6b0c395472486&oe=5E71F07B"
}, {
	id: 5,
	image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t31.0-0/p640x640/19400292_1274454709343544_6648715266965146484_o.jpg?_nc_cat=104&_nc_ohc=xiHQBKswGusAQlCM0UcBdVJnrqhINLwwqXqUacU-yX-NUMJgX-CdWfrGw&_nc_ht=scontent.fclo1-2.fna&oh=49ef8e70b1b7d1095d8594aa592c4b29&oe=5E8C108B"
}, {
	id: 6,
	image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t31.0-0/p640x640/19388739_1274454392676909_4793678470379259126_o.jpg?_nc_cat=109&_nc_ohc=cuNhS5N4nAwAQmIJ-NrRcmsVX92uIXsKmkdVSAjfQoodC5MH5YO1zvYvg&_nc_ht=scontent.fclo1-1.fna&oh=5f9454b888cd4e707ebf16120698cc65&oe=5E83DE12"
}, {
	id: 7,
	image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t31.0-8/s960x960/19388468_1274424162679932_3302651586852411805_o.jpg?_nc_cat=108&_nc_ohc=af1fdbViz4wAQltDKJ6KebJzCzM7gnplwxP1FsucsIo5dx_jV8x6pUEog&_nc_ht=scontent.fclo1-1.fna&oh=89a6459326195036d023e40a374f3b25&oe=5E404639"
}, {
	id: 8,
	image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t31.0-8/s960x960/14524546_1016472725141745_8570856352215463389_o.jpg?_nc_cat=102&_nc_ohc=oNqu6HzY150AQl39notK3l7UU4Nh7Qy-fsp28qutlooZV7lpgigFttVRA&_nc_ht=scontent.fclo1-2.fna&oh=5d994238b828408150a924938a9b3912&oe=5E8043F8"
}, {
    id: 9,
    image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t31.0-8/s960x960/14567411_1016472481808436_2397967489446571377_o.jpg?_nc_cat=107&_nc_ohc=FKeknfF8iboAQlj2Jr0htxD9h2bjBZF9DPA-tKMwuuYlqhg4RDv78CJbw&_nc_ht=scontent.fclo1-1.fna&oh=65e59f4eeef44b584bf0aaea555159d3&oe=5E421971"
}, {
    id: 10,
    image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t31.0-0/p180x540/12185541_809876752468011_4180614177618044945_o.jpg?_nc_cat=107&_nc_ohc=_IC_w1aY-GEAQlbB41MjTmVMho-qw-jukU7LaVf1pWtftzbDfvOzS2z6g&_nc_ht=scontent.fclo1-1.fna&oh=6b2adca8b2cffe5fc0febca5162eb6b4&oe=5E726C0B"
}, {
    id: 11,
    image: "https://scontent.fclo1-1.fna.fbcdn.net/v/t31.0-0/p180x540/10482468_809876552468031_3296833880408555202_o.jpg?_nc_cat=111&_nc_ohc=fjbpKFSZK8kAQkhsr_feISZOrpeiQJj8I_K-hHlwuzm5H7UuwVUdUFYQQ&_nc_ht=scontent.fclo1-1.fna&oh=575da30ee929b879cad28bfd5bdc2358&oe=5E8269B5"
}, {
    id: 12,
    image: "https://scontent.fclo1-2.fna.fbcdn.net/v/t31.0-8/s960x960/19390643_1274423666013315_7705365822246884655_o.jpg?_nc_cat=102&_nc_ohc=m7Yiv5U2htMAQkWPku-cphz1H4BnABFnytM49la_-z_5Rw4Am4tGboqjw&_nc_ht=scontent.fclo1-2.fna&oh=d5bbde59d6f5bbaa260c5bedf061fb73&oe=5E7FE85B"
}]

class Galery extends React.Component {
    constructor(props) {
        super(props)  
        
        this.state = { 
            open : false, 
            image_url : ''
        }

        this._showMenu = this._showMenu.bind(this)
    }

    _showMenu(url_image) {
        if(!this.state.open) {
            this.setState({
                open: true,
                image_url: url_image
            })
        }else{
            this.setState({
                open: false,
                image_url: ''
            })
        }
    }


    render() {
        const dataItems = this.props.dataItems ? this.props.dataItems : data.length

        return(
            <section className="section__galery">
                <div className="container">
                    <h3 className="title">Galeria</h3>

                    <div className="section__galery_container">
                        {data.slice(0, dataItems).map((data) => {
                            return <GaleryItem data={data} key={data.id} showMenu={this._showMenu}/>
                        })}
                    </div>
                </div>

                {this.state.open && (
                    <GaleryItemShow image_url={this.state.image_url} showMenu={this._showMenu}/>
                )}
            </section>
        )
    }
}

export default Galery