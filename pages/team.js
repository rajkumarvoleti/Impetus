import { Tab, Tabs, Typography, useTheme } from "@mui/material";
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
        backgroundColor: "blue",
        border: "0px",
        borderRadius: "10px",
        color: "white",
      },
    },
  };

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
      name: "Muskaan Singh",
      phone: "+91 6388024544",
      post: "Sponsorship Head",
      imgname: "MUSKAAN_SINGH.jpg",
      insta: "https://instagram.com/muskaan._.sing?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/singh-muskaan",
    },
    person4: {
      name: "Ayush Kumar Singh",
      phone: "+91 9660241697",
      post: "Sponsorship Head",
      imgname: "ayush_kumar.jpg",
      insta: "https://www.instagram.com/ayushkumar30001/",
      link: "https://www.linkedin.com/in/ayush-kumar-singh-515209193/",
    },
    person5: {
      name: "Arnab Abhijit Sharma ",
      phone: "+91 9359746978",
      post: "Sponsorship Head",
      imgname: "ARNAB ABHIJIT SHARMA.jpg",
      insta: "https://www.instagram.com/arnab_sharma09/?igshid=ZDdkNTZiNTM%3D",
      link: "https://www.linkedin.com/in/arnab-sharma-56733118b",
    },
    person6: {
      name: "Akanksha Kumari",
      phone: "+91 6204290557",
      post: "Event Management Head",
      imgname: "AKANKSHA_KUMARI.jpg",
      insta: "https://instagram.com/myself._.akanksha?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/akanksha-kumari-2591201b6",
    },
    person7: {
      name: "Tannishtha Bag",
      phone: "+91 8587825869",
      post: "Event Management Head",
      imgname: "TANNISHTHA_BAG.png",
      insta: "https://instagram.com/tannishthabag?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/tannishtha-bag-255b691b1",
    },
    person8: {
      name: "Surojit Saha",
      phone: "+91 7364099860",
      post: "Event Management Head",
      imgname: "Surojit_Saha.jpg",
      insta: "https://www.instagram.com/obi_wan_surojit/",
      link: "https://www.linkedin.com/in/saha-surojit/",
    },
    person9: {
      name: "Kshitij Gupta",
      phone: "+91 7044631367",
      post: "Design and Content Head",
      imgname: "KSHITIJ_GUPTA (Design and Content Head).jpg",
      insta: "https://instagram.com/gupt.aa?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/kshitij-gupta-900887241",
    },
    person10: {
      name: "Garima Dabi",
      phone: "+91 8824728305",
      post: "Publicity Head",
      imgname: "Garima (Publicity Head).jpg",
      insta: "https://instagram.com/g_olaf._?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/garima-dabi-3a4669203",
    },
    person11: {
      name: "Karan Raj",
      phone: "+91 8809592078",
      post: "Finance Head",
      imgname: "Karan Raj.jpg",
      insta: "https://instagram.com/karan9664?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/karan-raj-a725a21b9",
    },
    person12: {
      name: "Rohan Jana",
      phone: "+91 9836813618",
      post: "Finance Head",
      imgname: "ROHAN_JANA.jpg",
      insta: "https://www.instagram.com/rohanjana02/",
      link: "#",
    },
    person13: {
      name: "Shubhankar Sarkar",
      phone: "+91 7985400976",
      post: "TA and Logistics",
      imgname: "SHUBHANKAR_SARKAR (TA and Logistics).jpg",
      insta: "https://instagram.com/shubhsark_9?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/shubhankar-sarkar-8a4394249/",
    },
    person14: {
      name: "Voleti Rajkumar",
      phone: "+91 9493730838",
      post: "Technical Head",
      imgname: "VOLETI_DHARMA (Technical Head).jpg",
      insta: "https://www.instagram.com/rajkumar_be_mee/",
      link: "https://www.linkedin.com/in/rajkumar-voleti/",
    },

    person15: {
      name: "Utsab Kundu",
      phone: "+91 8100460390",
      post: "Technical Executive",
      imgname: "utsab.jpg",
      insta: "https://www.instagram.com/utsab_kundu5/",
      link: "https://www.linkedin.com/in/utsab-kundu-3a742421b/",
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
        <TabPanel value={value} index={0} className="contactCards">
          <ContactCard person={person.person1} />
          <ContactCard person={person.person2} />
        </TabPanel>
        <TabPanel value={value} index={1} className="contactCards">
          <ContactCard person={person.person3} />
          <ContactCard person={person.person4} />
          <ContactCard person={person.person5} />
        </TabPanel>
        <TabPanel value={value} index={2} className="contactCards">
          <ContactCard person={person.person6} />
          <ContactCard person={person.person7} />
          <ContactCard person={person.person8} />
        </TabPanel>

        <TabPanel value={value} index={3} className="contactCards">
          <ContactCard person={person.person14} />
          <ContactCard person={person.person15} />
        </TabPanel>

        <TabPanel value={value} index={4} className="contactCards">
          <ContactCard person={person.person9} />
        </TabPanel>

        <TabPanel value={value} index={5} className="contactCards">
          <ContactCard person={person.person10} />
        </TabPanel>

        <TabPanel value={value} index={6} className="contactCards">
          <ContactCard person={person.person11} />
          <ContactCard person={person.person12} />
        </TabPanel>

        <TabPanel value={value} index={7} className="contactCards">
          <ContactCard person={person.person13} />
        </TabPanel>
      </Box>
      <Contact />
    </>
  );
}
