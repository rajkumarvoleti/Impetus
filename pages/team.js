import { Divider, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { Box } from "@mui/system";
import { useState } from "react";
import Contact from "../components/Contact";
import ContactCard from "../components/ContactCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function TeamPage() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const classes = {
    root: {
      justifyContent: "center",
    },
    scroller: {
      flexGrow: "0",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    margin: "50px 0",
    h1: {
      margin: "50px 0",
      fontSize: "48px",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    ".tabs": {
      width: "1000px",
      maxWidth: "95vw",
      mb: "100px",
      ".tab": {
        margin: "10px",
        fontSize: {
          lg: "16px",
          md: "16px",
          sm: "12px",
          xs: "12px",
        },
      },
      ".Mui-selected": {
        backgroundColor: "#01658d",
        border: "0px",
        borderRadius: "10px",
        color: "white",
      },
    },
  };
  const sponsorship_person = {
    person1: {
      name: "Muskaan Singh",
      phone: "+91 6388024544",
      post: "Sponsorship Head",
      imgname: "MUSKAAN_SINGH.jpg",
      insta: "https://instagram.com/muskaan._.sing?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/singh-muskaan",
    },
    person2: {
      name: "Ayush Kumar Singh",
      phone: "+91 9660241697",
      post: "Sponsorship Head",
      imgname: "ayush_kumar.jpg",
      insta: "https://www.instagram.com/ayushkumar30001/",
      link: "https://www.linkedin.com/in/ayush-kumar-singh-515209193/",
    },
    person3: {
      name: "Arnab Abhijit Sharma ",
      phone: "+91 9359746978",
      post: "Sponsorship Head",
      imgname: "ARNAB ABHIJIT SHARMA.jpg",
      insta: "https://www.instagram.com/arnab_sharma09/?igshid=ZDdkNTZiNTM%3D",
      link: "https://www.linkedin.com/in/arnab-sharma-56733118b",
    },
    person4: {
      name: "Vasu Krishna Khemka",
      phone: "+91 7808814413",
      post: "Sponsorship Executive",
      imgname: "IMG_20221213_233308_073 - 2020MEB003 VASU_KRISHNA.jpg",
      insta: "https://www.instagram.com/vasu_khemka/",
      link: "https://www.linkedin.com/in/vasukrishnakhemka2070",
    },
    person5: {
      name: "Pritha Ghosh",
      phone: "+91 8777476875",
      post: "Sponsorship Executive",
      imgname: "PicsArt_08-30-09.19.55 - 2020MEB007 PRITHA_GHOSH.jpg",
      insta: "https://www.instagram.com/me._.pritha/",
      link: "https://www.linkedin.com/in/pritha-ghosh-27761b211",
    },
  };
  const event_person = {
    person1: {
      name: "Akanksha Kumari",
      phone: "+91 6204290557",
      post: "Event Management Head",
      imgname: "AKANKSHA_KUMARI.jpg",
      insta: "https://instagram.com/myself._.akanksha?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/akanksha-kumari-2591201b6",
    },
    person2: {
      name: "Tannishtha Bag",
      phone: "+91 8587825869",
      post: "Event Management Head",
      imgname: "TANNISHTHA_BAG.png",
      insta: "https://instagram.com/tannishthabag?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/tannishtha-bag-255b691b1",
    },
    person3: {
      name: "Surojit Saha",
      phone: "+91 7364099860",
      post: "Event Management Head",
      imgname: "Surojit_Saha.jpg",
      insta: "https://www.instagram.com/obi_wan_surojit/",
      link: "https://www.linkedin.com/in/saha-surojit/",
    },
    // ------------------------------------------------------------------------
    person4: {
      name: "Anuvab Ghosh",
      phone: "+91 6291884285",
      post: "Event Management Executive",
      imgname: "PXL_20221121_191404173~3 - 2020MEB036 ANUVAB_GHOSH.jpg",
      insta: "https://www.instagram.com/anuvab_ghosh/",
      link: "https://www.linkedin.com/in/anuvab-ghosh-a10a57174",
    },
    person5: {
      name: "Avi Ambast ",
      phone: "+91 7277876396",
      post: "Event Management Executive",
      imgname: "Avi Ambast.jpg",
      insta: "https://www.instagram.com/ambast.avi/",
      link: "https://www.linkedin.com/in/avi-ambast-8a1521225",
    },
    person6: {
      name: "Uddanti Bhavani Prasad",
      phone: "+91 8374757468",
      post: "Event Management Executive",
      imgname: "IMG_20221207_111158 - 2020MEB026 UDDANTI_BHAVANI.jpg",
      insta: "https://www.instagram.com/bobby_uddanti/",
      link: "https://www.linkedin.com/in/bhavani-prasad-uddanti-7a759b249",
    },
    person7: {
      name: "Mahesh Bandlamudi",
      phone: "+91 8639555844",
      post: "Event Management Executive",
      imgname: "IMG_20220910_203653_2 - 2020MEB051 MAHESH_BANDLAMUDI.jpg",
      insta: "https://www.instagram.com/mahesh.bandlamudi_._/",
      link: "https://www.linkedin.com/in/mahesh-bandlamudi-b99873206",
    },
    person8: {
      name: "Sayantan Paul",
      phone: "+91 9830664404",
      post: "Event Management Executive",
      imgname: "WhatsApp Image 2023-02-15 at 18.23.59 - 2020MEB106 SAYANTAN_PAUL.jpeg",
      insta: "https://www.instagram.com/overthinking_menace/",
      link: "https://www.linkedin.com/in/paul-sayantan-ap8/",
    },
    person9: {
      name: "Shobhit Das",
      phone: "+91 7602274162",
      post: "Event Management Executive",
      imgname: "Shobhit - 2020MEB100 SHOBHIT_DAS.jpeg",
      insta: "https://www.instagram.com/dashobhit/",
      link: "https://www.linkedin.com/in/shobhit-das-15063b198",
    },
    person10: {
      name: "Shreyash Manze",
      phone: "+91 7700001193",
      post: "Event Management Executive",
      imgname: "IMG_20230213_231616 - 2020MEB059 MANZE_SHREYASH.jpg",
      insta: "https://www.instagram.com/shreyash_m_10/",
      link: "https://www.linkedin.com/in/shreyash-manze-a0a81a22a",
    },
    person11: {
      name: "Upendra Kikkari",
      phone: "+91 9704810737",
      post: "Event Management Executive",
      imgname: "My photo - 2020MEB077 KIKKARI_UPENDRA.jpg",
      insta: "https://www.instagram.com/upendra.2222/",
      link: "https://www.linkedin.com/in/upendra-kikkari-uk160602",
    },
    person12: {
      name: "Siddhi Suman",
      phone: "+91 7667709642",
      post: "Event Management Executive",
      imgname: "Siddhi Suman Sari - 2020MEB066 SIDDHI_SUMAN.jpg",
      insta: "",
      link: "",
    },
    person13: {
      name: "Abhishek Rajput",
      phone: "+91 9355127436",
      post: "Event Management Executive",
      imgname: "2020MEB023 - 2020MEB023 ABHISHEK_RAJPUT.jpg",
      insta: "",
      link: "",
    },

  }
  const design_person = {
    person1: {
      name: "Kshitij Gupta",
      phone: "+91 7044631367",
      post: "Design and Content Head",
      imgname: "KSHITIJ_GUPTA (Design and Content Head).jpg",
      insta: "https://instagram.com/gupt.aa?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/kshitij-gupta-900887241",
    },
    person2: {
      name: "Parth Shende",
      phone: "+91 8483973876",
      post: "Design and Content Executive",
      imgname: "IMG_20230213_221002_525 - 2020MEB056 SHENDE_PARTH.jpg",
      insta: "https://www.instagram.com/parth.shende_25/",
      link: "https://www.linkedin.com/in/parth-shende-0b023b224",
    },
    person3: {
      name: "Poorva Mondal",
      phone: "+91 8436376729",
      post: "Design and Content Executive",
      imgname: "IMG_20230123_171216 - 2020MEB016 POORVA_MONDAL.jpg",
      insta: "",
      link: "https://www.linkedin.com/in/poorva-mondal-221a20224",
    },
    person4: {
      name: "Prasoon Ravi",
      phone: "+91 7412989518",
      post: "Design and Content Executive",
      imgname: "IMG_2022-09-30-20-49-29-286_1 - 2020MEB050 PRASOON_RAVI.jpg",
      insta: "https://www.instagram.com/its_joel_prasoon/",
      link: "https://www.linkedin.com/in/prasoon-ravi-1b025a211",
    },
    person5: {
      name: "Pratyusha Biswas",
      phone: "+91 8335914226",
      post: "Design and Content Executive",
      imgname: "PicsArt_01-27-03.03.01 - 2020MEB116 PRATYUSHA_BISWAS.jpg",
      insta: "",
      link: "",
    },
  }
  const publicity_person = {
    person1: {
      name: "Garima Dabi",
      phone: "+91 8824728305",
      post: "Publicity Head",
      imgname: "Garima (Publicity Head).jpg",
      insta: "https://instagram.com/g_olaf._?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/garima-dabi-3a4669203",
    },
    person2: {
      name: "Arushi Das",
      phone: "+91 8917684258",
      post: "Publicity Executive",
      imgname: "20230215_154405 - 2020MEB110 ARUSHI_DAS.jpg",
      insta: "https://instagram.com/ar.u_shhii?igshid=1wzg2oxd6ndmc",
      link: "https://www.linkedin.com/in/arushi-das-73ab591bb",
    },
    person3: {
      name: "Deendayal Upadhyay",
      phone: "+91 6350619979",
      post: "Publicity Executive",
      imgname: "deendyal bhaiya.JPG",
      insta: "https://instagram.com/_dee_xv?igshid=1x3yqehvai6mr",
      link: "https://www.linkedin.com/in/deendayal-upadhyay",
    },
    person4: {
      name: "Divyansh Bajpai",
      phone: "+91 9369462864",
      post: "Publicity Executive",
      imgname: "IMG_20220703_152417 - 2020MEB064 DIVYANSH_BAJPAI.jpg",
      insta: "https://instagram.com/divyanshh.b?igshid=1abmuyseh9ddc",
      link: "https://www.linkedin.com/in/divyansh-bajpai-97720b215",
    },
    person5: {
      name: "T Snehal Kumar",
      phone: "+91 7093081024",
      post: "Publicity Executive",
      imgname: "20220118_124844_0000 - 2020MEB072 TIPPANA_SAI.png",
      insta: "https://instagram.com/_always.snehal_?igshid=1qwjsdo6gblax",
      link: "https://www.linkedin.com/in/tippana-sai-snehal-kumar-81a174206",
    },
    person6: {
      name: "VIPUL YADAV",
      phone: "+91 8630273065",
      post: "Publicity Executive",
      imgname: "IMG_20230127_105103_853 - 2020MEB082 VIPUL_YADAV.jpg",
      insta: "https://instagram.com/vipulyadav_vy?igshid=1j5fg6ibxvzfy",
      link: "https://www.linkedin.com/in/vipul-yadav-vip",
    },
    person7: {
      name: "Sangmu Tamang",
      phone: "+91 8348703616",
      post: "Publicity Executive",
      imgname: "sangmu didi.JPG",
      insta: "",
      link: "",
    },
    person8: {
      name: "Kowshik Devarapalli ",
      phone: "+91 7013712351",
      post: "Publicity Executive",
      imgname: "IMG_20230216_084503 - 2020MEB111 DEVARAPALLI_KOWSHIK.jpg",
      insta: "",
      link: "https://www.linkedin.com/in/kowshik-devarapalli-a37b69240",
    },
  }

  const person = {
    person1: {
      name: "Ayush Jaiswal",
      phone: "+91 7766962188",
      post: "Main Coordinator",
      imgname: "Ayush_Jaiswal(Main Co ordinator).jpg",
      insta: "https://instagram.com/ayushashokjaiswal?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/ayush-jaiswal-ab8a491a6",
    },
    person2: {
      name: "S.V.S Sai Raghav",
      phone: "+91 9550994950",
      post: "Main Coordinator",
      imgname: "S.V.S_Sai_Raghav.jpg",
      insta: "https://instagram.com/raagu_1237?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/raghavsingupuram",
    },
    person3: {
      name: "Karan Raj",
      phone: "+91 8809592078",
      post: "Finance Head",
      imgname: "Karan Raj.jpg",
      insta: "https://instagram.com/karan9664?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/karan-raj-a725a21b9",
    },
    person4: {
      name: "Rohan Jana",
      phone: "+91 9836813618",
      post: "Finance Head",
      imgname: "ROHAN_JANA.jpg",
      insta: "https://www.instagram.com/rohanjana02/",
      link: "#",
    },
    person5: {
      name: "Shubhankar Sarkar",
      phone: "+91 7985400976",
      post: "TA and Logistics",
      imgname: "SHUBHANKAR_SARKAR (TA and Logistics).jpg",
      insta: "https://instagram.com/shubhsark_9?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/shubhankar-sarkar-8a4394249/",
    },
    person6: {
      name: "Voleti Rajkumar",
      phone: "+91 9493730838",
      post: "Technical Head",
      imgname: "VOLETI_DHARMA (Technical Head).jpg",
      insta: "https://www.instagram.com/rajkumar_be_mee/",
      link: "https://www.linkedin.com/in/rajkumar-voleti/",
    },

    person7: {
      name: "Utsab Kundu",
      phone: "+91 8100460390",
      post: "Technical Executive",
      imgname: "utsab.jpg",
      insta: "https://www.instagram.com/utsab_kundu5/",
      link: "https://www.linkedin.com/in/utsab-kundu-3a742421b/",
    },
    person8: {
      name: "Ujjwal Chaudhari",
      phone: "+91 9555209179",
      post: "Joint coordinator",
      imgname: "IMG_20230215_125418 - 2020MEB002 UJJWAL_CHAUDHARI.jpg",
      insta: "https://www.instagram.com/whomiuc/",
      link: "https://www.linkedin.com/in/ujjwal-chaudhari-42905b23a",
    },

    person9: {
      name: "Ashutosh Kumar Manjhi",
      phone: "+91 7488649291",
      post: "Joint coordinator",
      imgname: "IMG_20220421_235117_405 - 2020MEB057 ASHUTOSH_KUMAR.jpg",
      insta: "",
      link: "",
    },
    person10: {
      name: "Jay R Abhimanyu",
      phone: "+91 7660827600",
      post: "Videography",
      imgname: "Polish_20230215_175808630 - 2020MEB096 YANAMADALA_JAYA.jpg",
      insta: "https://www.instagram.com/the_j.a.y_/",
      link: "https://www.linkedin.com/in/jay-r-abhimanyu",
    },
  };

  return (
    <>
      <Box sx={styles} className="center1">
        <Typography variant="h1">Contact Us</Typography>
        <br></br>
        <Box className="tabs">
          <Tabs value={value} onChange={handleChange}>
            <Tab className="tab" label="Main Coordinators" />
            <Tab className="tab" label="Sponsorship Team" />
            <Tab className="tab" label="Event Management Team" />
            <Tab className="tab" label="Technical Team" />
            <Tab className="tab" label="Content and Design Team" />
            <Tab className="tab" label="Publicity Team" />
            <Tab className="tab" label="Finance Team" />
            <Tab className="tab" label="Food and Logistics Team" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="contactCards">{/*Main Coordinators*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={person.person1} />
            <ContactCard person={person.person2} />
          </Box>

          <ContactCard person={person.person8} />
          <ContactCard person={person.person9} />
        </TabPanel>
        <TabPanel value={value} index={1} className="contactCards">{/*Sponsorship Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={sponsorship_person.person1} />
            <ContactCard person={sponsorship_person.person2} />
            <ContactCard person={sponsorship_person.person3} />
          </Box>
          <br style={{ width: "100%" }}></br>
          <ContactCard person={sponsorship_person.person4} />
          <ContactCard person={sponsorship_person.person5} />

        </TabPanel>
        <TabPanel value={value} index={2} className="contactCards">{/*Event Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person2} />
            <ContactCard person={event_person.person3} />
          </Box>
          <ContactCard person={event_person.person5} />
          <ContactCard person={event_person.person4} />
          <ContactCard person={event_person.person6} />
          <ContactCard person={event_person.person7} />
          <ContactCard person={event_person.person8} />
          <ContactCard person={event_person.person9} />
          <ContactCard person={event_person.person10} />
          <ContactCard person={event_person.person11} />
          <ContactCard person={event_person.person12} />
          <ContactCard person={event_person.person13} />


        </TabPanel>

        <TabPanel value={value} index={3} className="contactCards">{/*Technical Team*/}

          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={person.person6} />
          </Box>
          <ContactCard person={person.person7} />
        </TabPanel>

        <TabPanel value={value} index={4} className="contactCards">{/*Design*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={design_person.person1} />
          </Box>
          <ContactCard person={design_person.person2} />
          <ContactCard person={design_person.person3} />
          <ContactCard person={design_person.person4} />
          <ContactCard person={design_person.person5} />
          <ContactCard person={person.person10} />
        </TabPanel>

        <TabPanel value={value} index={5} className="contactCards">{/*Publicity */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={publicity_person.person1} />
          </Box>
          <ContactCard person={publicity_person.person2} />
          <ContactCard person={publicity_person.person3} />
          <ContactCard person={publicity_person.person4} />
          <ContactCard person={publicity_person.person5} />
          <ContactCard person={publicity_person.person6} />
          <ContactCard person={publicity_person.person7} />
          <ContactCard person={publicity_person.person8} />
        </TabPanel>

        <TabPanel value={value} index={6} className="contactCards">{/*Finance*/}
          <ContactCard person={person.person3} />
          <ContactCard person={person.person4} />
        </TabPanel>

        <TabPanel value={value} index={7} className="contactCards">{/*Food*/}
          <ContactCard person={person.person5} />
        </TabPanel>
      </Box>
      <Contact />
    </>
  );
}
