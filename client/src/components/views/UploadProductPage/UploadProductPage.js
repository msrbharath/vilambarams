import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Chennai" },
    { key:2, value: "Coimbatore" },
    { key:3, value: "Madurai" },
    { key:4, value: "Tiruchirappally" },
    { key:5, value: "Dindigul" },
    { key:6, value: "Erode" },
    { key:7, value: "Cuddalore" },
    { key:8, value: "Dharmapuri" },
    { key:9, value: "Nagapattinam" },
    { key:10, value: "Namakkal" },
    { key:11, value: "Perambalur" },
    { key:12, value: "Pudukottai" },
    { key:13, value: "Ramanathapuram" },
    { key:14, value: "Salem" },
    { key:15, value: "Sivagangai" },
    { key:16, value: "Thanjavur" },
    { key:17, value: "Theni" },
    { key:18, value: "The Nilgiris" },
    { key:19, value: "Thirunelveli" },
    { key:20, value: "Thiruvallur" },
    { key:21, value: "Thiruvannamalai" },
    { key:22, value: "Thiruvarur" },
    { key:23, value: "Thoothukudi" },
    { key:24, value: "Tiruppur" },
    { key:25, value: "Vellore" },
    { key:26, value: "Villupuram" },
    { key:27, value: "Virudhunagar" },
    { key:28, value: "Ariyalur" },
    { key:29, value: "Kancheepuram" },
    { key:30, value: "Kanniyakumari" },
    { key:31, value: "Karur" },
    { key:32, value: "Krishnagiri" },
    { key:33, value: "Kallakkurichi" },
    { key:34, value: "Thenkasi" },
    { key:35, value: "Chengalpattu" },
    { key:36, value: "Ranipet" },
    { key:37, value: "Thirupattur(N)" }
]



function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Products to Advertise</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price(₹)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onContinentsSelectChange}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
