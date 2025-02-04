// external import
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios';

const FinalResult = () => {

    const Room = useSelector(state => state.draggable_img);
    const PeanutGallery = useSelector(state => state.peanut_gallery_img);
    const Outside = useSelector(state => state.removed_draggable_img);
    const SessionInfo = useSelector(state => state.session_info.data);

    const gamePlayTime = SessionInfo.gamePlayTime.split(":");


    const styles = StyleSheet.create({
        page: {
            padding: 42,
            paddingBottom: 25
        },
        mainView: {
            display: 'flex',
            flexDirection: 'column',
        },
        heading: {
            width: '100%',
            alignItems: 'center',
        },
        headingText: {
            fontSize: 28,
            fontWeight: 900
        },
        mainSection: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 30,
            justifyContent: 'space-between',
            paddingTop: 25,
            textAlign: 'center'
        },
        descriptionText: { textAlign: 'left', paddingRight: '45px' }
    });

    const apiPath = import.meta.env.VITE_API;

    const MyPDF = (<Document>
        <Page size='A4' style={styles.page}>
            <View style={styles.mainView}>

                <View style={styles.heading}>
                    <Text style={styles.headingText}>Result</Text>
                    <Image src={`${apiPath}/${SessionInfo.clientImgSrc}`} style={{ width: 120, marginTop: 12, marginBottom: 7 }} />
                    <Text style={{ fontSize: 15 }}>Session name: {SessionInfo.sessionName}</Text>
                    <Text style={{ fontSize: 15 }}>Date and Time: {SessionInfo.date} [{SessionInfo.time}]</Text>
                    <Text style={{ fontSize: 15 }}>Game play time: {`${gamePlayTime[0] > 0 ? gamePlayTime[0] + "m:" : ""}${gamePlayTime[1]}s`} </Text>
                </View>

                <View style={styles.mainSection}>
                    <View>
                        <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>IN ROOM</Text>
                        <View style={{ flexDirection: 'column', paddingTop: 10, gap: 20 }}>
                            {/* // start  */}
                            {Room.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 75, height: 75 }} src={`${apiPath}/${item.folder_name}/${item.src}`} />
                                    <View style={{ paddingLeft: 10, fontSize: 14, justifyContent: 'center', lineHeight: 1.5 }}>
                                        <Text>{item.title}</Text>
                                        <Text>{item.role}</Text>
                                        <Text style={styles.descriptionText}>{item.description}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>PEANUT GALLERY</Text>
                        <View style={{ flexDirection: 'column', paddingTop: 10, gap: 20 }}>
                            {/* // start  */}
                            {PeanutGallery.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 75, height: 75 }} src={`${apiPath}/${item.folder_name}/${item.src}`} />
                                    <View style={{ paddingLeft: 10, fontSize: 14, justifyContent: 'center', lineHeight: 1.5 }}>
                                        <Text>{item.title}</Text>
                                        <Text>{item.role}</Text>
                                        <Text style={styles.descriptionText}>{item.description}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>OUTSIDE</Text>
                        <View style={{ flexDirection: 'column', paddingTop: 10, gap: 20 }}>
                            {/* // start  */}
                            {Outside.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 75, height: 75 }} src={`${apiPath}/${item.folder_name}/${item.src}`} />
                                    <View style={{ paddingLeft: 10, fontSize: 14, justifyContent: 'center', lineHeight: 1.5 }}>
                                        <Text>{item.title}</Text>
                                        <Text>{item.role}</Text>
                                        <Text style={styles.descriptionText}>{item.description}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

            </View>
        </Page>
    </Document>
    );

    const NewPdf = () => MyPDF;

    async function uploadPDFtoServer(pdfBlob) {
        const pdfFile = new File([pdfBlob], `${SessionInfo.sessionName}.pdf`, { type: 'application/pdf' });
        const formData = new FormData();
        formData.append('file', pdfFile);
        formData.append('session_name', SessionInfo.sessionName);

        try {
            await axios.post(`/pdf`, formData, {
                headers: {
                    'Content-Type': 'application/pdf'
                }
            });
            toast.success('PDF has been uploaded!');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <PDFViewer style={{ width: '100%', height: '90vh' }}>
                <NewPdf />
            </PDFViewer>

            <div className='d-flex justify-content-between px-5 pt-2'>

                <PDFDownloadLink document={MyPDF} fileName={SessionInfo.sessionName}>
                    {({ blob, url, loading, error }) =>
                        <Button variant='primary'><h3>{loading ? 'Loading document...' : 'Download now'}</h3></Button>
                    }
                </PDFDownloadLink>

                <BlobProvider document={MyPDF}>
                    {({ blob, url, loading, error }) => {
                        return <Button variant='primary' onClick={() => uploadPDFtoServer(blob)}><h3>{loading ? 'Loading document...' : 'Upload the file'}</h3></Button>;
                    }}
                </BlobProvider>

            </div>

        </div>
    );
};

export default FinalResult;
