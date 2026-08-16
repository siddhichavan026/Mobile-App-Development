import React from 'react';
import {View , Text, StyleSheet, ScrollView} from 'react-native';

const AboutCollege = () => {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style= {styles.title}>About DKTE</Text>

                <Text style={styles.heading}>1.About DKTE </Text>

                <Text style={styles.paragraph}>
                    D.K.T.E. Society's Textile & Engineering Institute is an empowered autonomous institute located in Ichalkaranji, Maharashtra. 
                    The institute was founded in 1982 and has established a prominent position in engineering education, training, research, and consultancy. 
                    It is affiliated with Shivaji University, Kolhapur. 
                    DKTE provides education across several engineering and technology disciplines and serves students through Diploma, Undergraduate, Postgraduate, and Ph.D. programs. 
                    The institute focuses on developing technical knowledge, practical skills, innovation, and professional capabilities among its students.
                </Text>

                <Text style={styles.heading}>2.History and Growth</Text>
                <Text style={styles.paragraph}>
                    DKTE was established in 1982 and was the first institute in Maharashtra to be started on a no-grant basis. Over the years, the institute has grown significantly in terms of academic programs, students, faculty, infrastructure, research, and industry collaboration. 
                    The institute received autonomous status in 2016 and Empowered Autonomy from Shivaji University in 2023. Today, DKTE has around 4,000 students and 215 faculty members. 
                    Its continuous development reflects its commitment to providing quality technical education and creating opportunities for students.
                </Text>

                <Text style={styles.heading}>3. Academic Programs</Text>
                <Text style={styles.paragraph}>
                    DKTE offers a wide range of academic programs in different areas of engineering, technology, textiles, computer science, and management. 
                    Undergraduate programs include Computer Science and Engineering, Computer Science and Engineering with Artificial Intelligence and Machine Learning, Artificial Intelligence and Data Science, Mechanical Engineering, Civil Engineering, Electrical Engineering, and Electronics and Telecommunication Engineering. 
                    The institute also offers several Textile Engineering programs along with postgraduate and doctoral programs. 
                    This diverse range of courses allows students to choose programs according to their interests and career goals.
                </Text>

                <Text style={styles.heading}>4. Computer Science and AI Education</Text>
                <Text style={styles.paragraph}>
                    The institute provides specialized programs in Computer Science and Engineering, including Computer Science and Engineering with Artificial Intelligence and Machine Learning.
                     It also offers a B.Tech program in Artificial Intelligence and Data Science. These programs help students develop knowledge in programming, computing, artificial intelligence, machine learning, data science, and modern technologies. 
                     The institute also offers M.Tech and Ph.D. opportunities in Computer Science and Engineering. 
                    Through these programs, students can develop technical skills required for careers in software development, artificial intelligence, data science, research and related fields.
                </Text>

                <Text style={styles.heading}>5. Accreditation and Recognition</Text>
                <Text style={styles.paragraph}>
                    DKTE has received several important recognitions for its academic quality. The institute has been accredited with an A+ Grade by NAAC in two consecutive cycles. 
                    All eligible undergraduate programs of the institute are accredited by the National Board of Accreditation. The institute has also been identified as a Mentor Institution under the AICTE Margdarshak Scheme and as a Potential Mentor under the UGC PARAMARSH scheme. 
                    These recognitions demonstrate the institute's focus on maintaining academic standards, quality education, and continuous improvement.
                </Text>

                <Text style={styles.heading}>6. Innovation and Entrepreneurship</Text>
                <Text style={styles.paragraph}>
                    Innovation and entrepreneurship are important parts of the academic environment at DKTE. T
                    he institute has an Institutional Innovation Council that works towards developing a culture of innovation and entrepreneurship among students. 
                    DKTE IIC has received a four-star rating for its achievements in building this culture. The institute also has an Idea Lab and provides opportunities for students to explore innovative ideas and develop projects. 
                    Such initiatives encourage students to think creatively, solve real-world problems and transform their ideas into useful technological solutions.
                </Text>

                <Text style={styles.heading}>7. Industry Interaction and Research</Text>
                <Text style={styles.paragraph}>
                    DKTE places strong emphasis on interaction between education and industry. 
                    The institute has signed Memorandums of Understanding with 29 foreign universities and more than 100 industries, creating opportunities for collaboration and exposure. 
                    The institute has also received government-funded projects amounting to more than ₹60 crore. Research activities are conducted in areas including Textile Engineering, Electronics Engineering, Mechanical Engineering and Computer Science and Engineering. 
                    These activities provide students and faculty with opportunities to participate in research, projects, innovation, and technology development.
                </Text>

                <Text style={styles.heading}>8. Training and Placement</Text>
                <Text style={styles.paragraph}>
                    The Training and Placement Department at DKTE works to connect students with industries and provide opportunities for internships, industrial training and campus recruitment. 
                    The institute conducts Campus Recruitment Training to improve students' vocabulary, communication, writing, resume preparation, aptitude, interview skills, and group discussion abilities. 
                    According to the institute's website, 839 students were placed through the campus placement cell in the 2025–26 academic year. 
                    The placement process includes opportunities with companies from different sectors and supports students in preparing for their professional careers
                </Text>

                <Text style={styles.heading}>9. Student Life and Activities</Text>
                <Text style={styles.paragraph}>
                    Student life at DKTE extends beyond classroom education through various co-curricular and extracurricular activities. 
                    The institute provides facilities and opportunities related to student activities, sports, industrial tours, student awards, student support and other campus activities. 
                    Students can participate in technical events, competitions, workshops, clubs, and other activities that help develop teamwork and leadership skills. 
                    Such activities provide students with opportunities to apply their knowledge outside the classroom. 
                    They also help students improve communication, confidence, creativity, and overall personality development.
                </Text>

                <Text style={styles.heading}>10. Overall Development and Future</Text>
                <Text style={styles.paragraph}>
                    DKTE aims to prepare students for professional careers by combining academic education with practical exposure, industry interaction, research, innovation, and skill development. 
                    The institute provides opportunities across undergraduate, postgraduate, and doctoral education in multiple engineering and technology disciplines. Its academic autonomy, accreditation, industry partnerships, international collaborations, placement activities and innovation initiatives contribute to a broad learning environment. 
                    With its continued focus on education, research, entrepreneurship and industry readiness, DKTE works towards developing skilled professionals who can contribute effectively to society and the engineering and technology sectors.
                </Text>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 30,
        margin : 25,
    },
    title : {
        fontSize : 28,
        fontWeight : 'bold',
        textAlign : 'center',
        marginBottom : 20,
    },
    heading : {
        fontSize : 20,
        fontWeight : 'bold',
        marginTop : 8,
    },
    paragraph : {
        fontSize : 16,
        lineHeight : 25,
        textAlign : 'justify',
    },
});
export default AboutCollege;