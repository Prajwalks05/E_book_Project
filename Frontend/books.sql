/*Table Creation*/
CREATE TABLE e_book (
  book_id TEXT PRIMARY KEY,
  book_title TEXT,
  author TEXT,
  year INT8,
  description TEXT,
  url TEXT,
  img_url TEXT,
  tag TEXT
);


/*Value insertion*/
insert into e_book
values
(1,
 'Java: The Complete Reference, Ninth edition',
 'Herbert Schildt',
 2014,
 'Best-selling author Herbert Schildt has written extensively about programming 
 for nearly three decades and is a leading authority on the Java language. His books have sold millions of copies worldwide and have been translated into all 
 major foreign languages. He is the author of numerous books on Java, 
 including Java: A Beginner’s Guide, Herb Schildt’s Java Programming Cookbook, and
 Swing: A Beginner’s Guide',
 'https://www.sietk.org/downloads/javabook.pdf',
 'https://m.media-amazon.com/images/I/61605LQW7dL._AC_UF1000,1000_QL80_.jpg'
)

insert into e_book
values
(2,
 'Java: The Complete Reference, Ninth edition',
 'Herbert Schildt',
 2014,
 'Best-selling author Herbert Schildt has written extensively about programming for nearly three decades and is a leading authority on the Java language. His books have sold millions of copies worldwide and have been translated into all major foreign languages. He is the author of numerous books on Java, including Java: A Beginner’s Guide, Herb Schildt’s Java Programming Cookbook, and Swing: A Beginner’s Guide',
 'https://www.sietk.org/downloads/javabook.pdf',
 'https://m.media-amazon.com/images/I/61605LQW7dL._AC_UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(3,
 'Data Structures and Algorithms with C',
 '"Debdutta Pal & Suman Halder"',
 2018,
 'Introduction to Python Programming is an interactive offering that teaches basic programming concepts, problem-solving skills, and the Python language using hands-on activities. The resource includes a unique,integrated code runner, through which students can immediately apply what they learn to check their understanding. Embedded videos, critical thinking exercises, and explorations of external programming tools
 and activities all contribute to a meaningful and supportive learning experience.
 The content is organized in chapters, with each chapter containing 6-8 sections. Each section follows the
 pattern:
 • Learning objectives
 • 1–3 subsections
 • Programming practice',
 'https://assets.openstax.org/oscms-prodcms/media/documents/Introduction_to_Python_Programming_-_WEB.pdf',
 'https://media.oceanofpdf.com/2024/06/PDF-EPUB-Introduction-to-Python-Programming-by-Udayan-Das-Download.jpg',
 'education'
);

insert into e_book
values
(4,
 'Beginning C++ Programming',
 'Richard Grimes',
 2017,
 'This book is intended for experienced programmers who are new to C++. The reader is
expected to understand what high-level languages are for and basic concepts such as
modularizing code and controlling execution flow.',
 'https://notalentgeek.github.io/note/note/project/project-independent/pi-brp-beginning-c-programming/document/20170807-1504-cet-1-book-and-source-1.pdf',
 'https://m.media-amazon.com/images/I/81tEcO2+8VL._UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(5,
 'Digital Electronics:
Principles, Devices and Applications',
 'Anil K. Maini',
 2007,
 'Digital Electronics: Principles, Devices and Applications is a comprehensive book covering, in
 one volume, both the fundamentals of digital electronics and the applications of digital devices and
 integrated circuits. It is different from similar books on the subject in more than one way. Each chapter
 in the book, whether it is related to operational fundamentals or applications, is amply illustrated
 with diagrams and design examples. In addition, the book covers several new topics, which are of
 relevance to any one having an interest in digital electronics and not covered in the books already in
 print on the subject. These include digital troubleshooting, digital 
 instrumentation, programmable logic
 devices, microprocessors and microcontrollers. While the book covers in entirety what is required by
 undergraduate and graduate level students of engineering in electrical, 
  electronics, computer science and
 information technology disciplines, it is intended to be a very useful reference book for professionals,
 R&D scientists and students at post graduate level',
 'https://www.shahucollegelatur.org.in/Department/Studymaterial/sci/it/BCA/FY/digielec.pdf',
 'https://m.media-amazon.com/images/I/71X1jS-9iOL._AC_UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(6,
 'Fundamentals Of Database 
Systems, Seventh Edition',
 'Ramez Elmasri & Shamkant B. Navathe',
 2015,
 'This book introduces the fundamental concepts 
necessary for designing, using, and implementing 
database systems and database applications. Our presentation stresses the fundamentals of database modeling and design, the languages and models provided by the 
database management systems, and database system implementation techniques. 
The book is meant to be used as a textbook for a one- or two-semester course in 
database systems at the junior, senior, or graduate level, and as a reference book. Our 
goal is to provide an in-depth and up-to-date presentation of the most important 
aspects of database systems and applications, and related technologies. We assume 
that readers are familiar with elementary programming and data-structuring con-
cepts and that they have had some exposure to the basics of computer organization.',
 'https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-28-11-76901.pdf',
 'https://m.media-amazon.com/images/I/71ocXCxUQVL._AC_UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(7,
 'Data Structures And Algorithms Made Easy, Fivth Edition',
 'Narasimha Karumanchi',
 2017,
 'If you read the book as a student preparing for competitive exams for Computer Science / Information Technology, the content covers all the required topics in full detail. While writing this book, my main focus was to help students who are preparing for these exams. In all the chapters you will see more emphasis on problems and analysis rather than on theory. In each chapter, you will first see the basic required theory followed by various problems.',
 'https://eprints.triatmamulya.ac.id/1694/1/Data%20Structures%20and%20Algorithms%20Made%20Easy_%20Data%20Structures%20and%20Algorithmic%20Puzzles.pdf',
 'https://m.media-amazon.com/images/I/71ocXCxUQVL._AC_UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(8,
 'Operating System Concepts, Tenth Edition',
 'Abraham Silberschantz, Peter Baer Galvin, & Greg Gagne',
 2018,
 'Operating systems are an essential part of any computer system. Similarly, a
course on operating systems is an essential part of any computer science edu-
cation. This field is undergoing rapid change, as computers are now prevalent
in virtually every arena of day-to-day life— from embedded devices in auto-
mobiles through the most sophisticated planning tools for governments and
multinational firms. Yet the fundamental concepts remain fairly clear, and it is
on these that we base this book.',
 'https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf',
 'https://m.media-amazon.com/images/I/81SwKCia7VL._AC_UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(9,
 'Pro MERN Stack Full Stack Web App Development  with Mongo, Express, React, and Node, First Edition ',
 'Vasan Subramanian',
 2017,
 'Developers and architects who have prior experience in any web app stack other than  the MERN stack will find this book useful for learning about this modern stack. Prior knowledge of how web applications work is required. Knowledge of JavaScript is also required. It is further assumed that the reader knows the basics of HTML and CSS. It will greatly help if you are also familiar with the version control tool git; you can try out the code just by cloning the git repository that holds all the source code described in this book, and running each step by just checking out a branch.If you have decided that your new app will use the MERN stack, then this book will help you quickly get off the ground. Even if you have not made any decision, reading the book will get you excited about MERN and equip you with enough knowledge to make that decision for a future project. The most important thing you will learn is how to put  together multiple technologies and build a complete, functional web application; by the book’s end, you’ll be a full-stack developer or architect on MERN',
 'https://scholar.archive.org/work/ghhn2nhu6ja3hafebfmsoik4je/access/wayback/http://dl.farinsoft.ir:80/ebooks/Pro-MERN-Stack-Development-Express.pdf',
 'https://m.media-amazon.com/images/I/71YNqR4it9L._UF1000,1000_QL80_.jpg',
 'education'
);

insert into e_book
values
(10,
 'The UNIX 
Programming 
Environment, First Edition',
 'Brain W 
Kernighan & Rob Pike',
 2015,
 'As the UNIX system has spread, the fraction of its users who are skilled in its application has decreased. Time and again, we have seen experienced users, ourselves included, find only clumsy solutions to a problem, or write programs to do jobs that existing tools handle easily. Of course, the elegant solutions are not easy to see without some experience and understanding. We hope that by reading this book you will develop the understanding to make your use of the system - whether you are a new or seasoned user- effective and enjoyable. We want you to use the UNIX system well.',
 'https://scis.uohyd.ac.in/~apcs/itw/UNIXProgrammingEnvironment.pdf',
 'https://m.media-amazon.com/images/I/81KHKG2ZjfL._SY466_.jpg',
 'education'
);

insert into e_book
values
(11,
 'Srimad Bhagavata 
Mahapurana',
 'Vyasa',
 2014,
 'The Bhagavata Purana, literally meaning Divine-Eternal Tales of The Supreme Lord, is considered the most important of the Puranas.',
 'https://lakshminarayanlenasia.com/wp-content/uploads/2017/03/Bhagavata-Purana_1stTime.pdf',
 'https://m.media-amazon.com/images/I/917isaMarQL._AC_UF1000,1000_QL80_.jpg',
 'devotional'
);


insert into e_book
values
(12,
 'Bhagavad-Gita',
 'Vyasa',
 1971,
 'Explores traditional Hindu teachings on morality and spiritual wisdom, including karma, non-attachment, and divine self',
 'https://scholar.archive.org/work/vhyqfoxpjfd2tf5xf5e26nd3si/access/wayback/http://www.bhagavatgita.ru/files/Bhagavad-gita_As_It_Is.pdf',
 'https://cdn.kobo.com/book-images/bc852c9f-2f5e-46fc-8bd5-92adb413189b/353/569/90/False/bhagavad-gita-as-it-is-1.jpg',
 'devotional'
);

insert into e_book
values
(13,
 'The Mahabharata',
 'Vyasa',
 1883 - 1896,
 'The Mahabharata is an ancient Indian epic where the main story revolves around two branches of a family - the Pandavas and Kauravas - who, in the Kurukshetra War, battle for the throne of Hastinapura.',
 'https://www.holybooks.com/wp-content/uploads/MahabharataOfVyasa-EnglishTranslationByKMGanguli.pdf',
 'https://www.holybooks.com/wp-content/uploads/The-Mahabharata-PDF.jpg',
 'devotional'
);


insert into e_book
values
(14,
 'The Ramayana',
 'Valmiki',
 2008,
 'The Ramayana is a Hindu epic poem that tells the story of Rama, the seventh incarnation of the god Vishnu, and his adventures',
 'https://www.gutenberg.org/files/24869/24869-pdf.pdf',
 'https://akshargranth.in/cdn/shop/files/Ramayana.jpg',
 'devotional'
);


insert into e_book
values
(15,
 'Ghosts',
 'Raina Telgemeier',
 2016,
 'Catrina and her family have moved to the coast of Northern California for the sake of her little sister, Maya, who has cystic fibrosis—and Cat is even less happy about the move when she is told that her new town is inhabited by ghosts, and Maya sets her heart on meeting one',
 'https://kids.scholastic.com/content/dam/scholastic/kids/pdf/Book%20Excerpts/Ghosts%20Book%201%20Excerpt.pdf',
 'https://m.media-amazon.com/images/I/81dr+OTTeSL._AC_UF1000,1000_QL80_.jpg',
 'comics'
);

insert into e_book
values
(16,
 'A Step Move Forward',
 'NCERT',
 2023,
 '       A chapter focused on the personal growth and social responsibilities of students, encouraging them to take initiative in learning and contributing positively to society.',
 'https://ncert.nic.in/pdf/Comic_Book/Comic_book_English.pdf',
 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSmZI7QpxevxxqtEHzU_bFQZVE1AGCD-YeI3yPRE0kxL9z6kBr9AiBac9eh6whuwLqkNlG8jvaEhM71lZhEpKAgmOEtORA6yTsnrjxT9HUc5T75fcsKEN_pgWOlcxpEWhcuQIg-CJep66KniYn2avLyomNYQFzw7OMxWn4I4_61P1iKPsJcibzsl670GQ2/s320/Untitled%203.jpg',
 'comics'
);


insert into e_book
values
(17,
 'The Battle Of The Villages',
 'International Committee of the Red Cross (ICRC)',
 2017,
 'This graphic novel was created by the ICRC to raise awareness about the effects of armed conflict on civilians. The story follows children in a fictional conflict setting, highlighting the challenges they face in a war-torn village. The narrative aims to teach empathy and convey the human cost of conflict, with an emphasis on international humanitarian law and the protection of civilians.',
 'https://www.icrc.org/eng/assets/files/other/icrc_battle_villages.pdf',
 'https://m.media-amazon.com/images/I/71nKCvOt8pL._UF1000,1000_QL80_.jpg',
 'comics'
);

insert into e_book
values
(18,
 'Sunny Meadows Woodland School',
 'T Albert',
 2023,
 'The class took a little train and went deep into the woods on their first school trip. But things didn’t go as planned and a whirlwind of adventure unfolds in this wonderful free bed time story book.',
 'https://cdn.shopify.com/s/files/1/2081/8163/files/005-SUNNY-MEADOWS-WOODLAND-SCHOOL-Free-Childrens-Book-By-Monkey-Pen.pdf?v=1589846892',
 'https://cdn.shopify.com/s/files/1/2081/8163/files/Sunny_Meadows_Woodland_School_c2901439-687e-4c3d-9d6c-3f733a88e90b.jpg',
 'comics'
);


insert into e_book
values
(19,
 'Stop & Go',
 'T Albert ',
 2019,
 'A great free children’s book with brilliant illustrations to help those little feet tread the road with caution. Here’s a lesson to be spared by none',
 'https://cdn.shopify.com/s/files/1/2081/8163/files/042-STOP-AND-GO-Free-Childrens-Book-By-Monkey-Pen.pdf?v=1589895624',
 'https://online.fliphtml5.com/lwlhl/dnwd/files/thumb/1.webp',
 'comics'
);

insert into e_book
values
(20,
 'DC Marvel Comics - Batman & Spiderman',
 'J M DeMatteis, Graham Nolan & Karl Kesel',
 2011,
 'Batman & Spider-Man: New Age Dawning is a one-shot comic book crossover between the two iconic superheroes from rival comic book publishers, DC Comics and Marvel Comics. The story is set in both Gotham City and New York City, where Batman (Bruce Wayne) and Spider-Man (Peter Parker) must team up to defeat a formidable threat.',
 'https://pdfroom.com/books/dc-marvel-comics-batman-spiderman/QpdMNOp8gaX/download',
 'https://m.media-amazon.com/images/I/91n8RDsLHSL._AC_UF1000,1000_QL80_.jpg',
 'comics'
);


insert into e_book
values
(21,
 'Scotland Yard',
 'Charlton Comics',
 1955,
 'Scotland Yard is a comic book series that features detectives solving various crimes and mysteries. The series typically focuses on British detectives, drawing inspiration from the famous police organization, Scotland Yard, known for its investigation of high-profile cases. The stories were likely created to appeal to readers who enjoyed detective and crime genres, and the series ran for a number of issues under Charlton Comics in the 1950s',
 'https://pdfroom.com/books/sy010001cbr/ra51n8RrdJO/download',
 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1494321539i/35102369.jpg',
 'comics'
);

insert into e_book
values
(22,
 'Naruto Volume - 01',
 'Masashi Kishimoto',
 2003,
 'Twelve years ago the Village Hidden in the Leaves was attacked by a fearsome threat. A nine-tailed fox spirit claimed the life of the village leader, the Hokage, and many others. Today, the village is at peace and a troublemaking kid named Naruto is struggling to graduate from Ninja Academy. His goal may be to become the next Hokage, but his true destiny will be much more complicated. The adventure begins now!',
 'https://pdfroom.com/books/naruto-volume-01/qXgeRNab26P/download',
 'https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF1000,1000_QL80_.jpg',
 'comics'
);


insert into e_book
values
(23,
 'Pokemon Adventures - Black & White',
 'Hidenori Kusaka & Satoshi Yamamoto',
 2013,
 'Pokemon Adventures - Black & White, Volume 1, Viz kids edition',
 'http://akamai.eprizecdn.net/pokemon_gifts/POK_BW_GN01_Preview.pdf',
 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421558981/pokemon-adventures-black-and-white-vol-1-9781421558981_hr.jpg',
 'comics'
);

insert into e_book
values
(24,
 'Grandmas Bag Of Stories',
 'Sudha Murthy & Priya Kuriyan',
 2012,
 'Summer Holiday Stories By Grandma',
 'https://www.ssgopalganj.in/online/E-Books/CLASS%20VI/Grandmas%20Bag%20of%20Stories%20by%20Sudha%20Murthy.pdf',
 'https://m.media-amazon.com/images/I/81ExT8sUebL._AC_UF1000,1000_QL80_.jpg',
 'comics'
);

insert into e_book
values
(25,
 '"The Missile Man of India Dr. APJ Abdul Kalam"',
 'Source from Vedantu',
 2014,
 'The book explores Dr. Kalams journey from his humble beginnings in Rameswaram to becoming a renowned scientist and the 11th President of India. It delves into his contributions to the Indian Space and Defense Research Organization (ISRO and DRDO), his vision for Indias future, and his deep commitment to education and youth empowerment. It is particularly aimed at young readers, encouraging them to dream big and pursue their passions with determination',
 'https://archive.org/download/apj-abdul-kalam-biography/apj-abdul-kalam-biography.pdf',
 'https://images.app.goo.gl/bNax2G1TqLqQ3od69',
 'biographies'
);

insert into e_book
values
(26,
 'Mohandas Karamchand Gandhi',
 'Richard Attenborough',
 1982,
 'Gandhi is an epic biographical film about Mahatma Gandhi, focusing on his leadership in India’s fight for independence through nonviolent resistance. Directed by Richard Attenborough and starring Ben Kingsley',
 'http://faculty.smcm.edu/jwschroeder/Web/ETHR1002/Global_Jutice_Readings_files/10.Gandhi.pdf',
 'https://images.app.goo.gl/d7CAFabGKz9Guf1W6',
 'biographies'
);


insert into e_book
values
(27,
 'Sri  Ramakrishna  Paramahamsa',
 'Sadguru Sri  Nannagaru',
 2010,
 'This book explores the life, teachings, and spiritual experiences of Sri Ramakrishna Paramahamsa, one of Indias greatest mystics. It focuses on his path to enlightenment and the deep wisdom he shared, emphasizing his universal approach to spirituality and devotion',
 'https://pdfseva.net/viewer/web/viewer.html?file=https://pdfseva.net/wp-content/uploads/2024/03/Ramakrishna-Paramahamsa-Biography.pdf',
 'https://images.app.goo.gl/rk9Ebby4nuyWR1Ev6',
 'biographies'
);

insert into e_book
values
(28,
 'Pandit Jawaharlal Nehru',
 'Lok Sabha Secretariat New Delhi',
 2019,
 'This biography explores Jawaharlal Nehru’s contributions to Indias freedom struggle, his role in shaping the countrys independent political identity, and his leadership in establishing democratic institutions.',
 'https://loksabhadocs.nic.in/Refinput/eprofiles/English/25082021_170350_1021206200.pdf',
 'https://images.app.goo.gl/Lu523BhyryPFfD9x6',
 'biographies'
);


insert into e_book
values
(29,
 'Sachin Tendulkar',
 'Hodder & Stoughton',
 2014,
 '"Playing It My Way" is the autobiography of cricket legend Sachin Tendulkar, offering a detailed account of his life and career. The book reflects on his early days, personal challenges, triumphs, and his contributions to Indian cricket, as well as the legacy he leaves behind. It is a must-read for cricket fans and offers a rare insight into the mindset of one of the greatest batsmen of all time',
 'https://www.drnishikantjha.com/papersCollection/Playing%20It%20My%20Way,%20.pdf',
 'https://images.app.goo.gl/YyfVq8ZyqHr7AbHk9',
 'biographies'
);

insert into e_book
values
(30,
 'Steve Jobs',
 'Walter Isaacson',
 2011,
 'FROM THE AUTHOR OF THE BESTSELLING
BIOGRAPHIES OF BENJAMIN FRANKLIN
AND ALBERT EINSTEIN, THIS IS THE
EXCLUSIVE BIOGRAPHY OF STEVE JOBS.',
 'https://elib.buxdupi.uz/books/isaacson2011stevejobs.pdf',
 'https://images.app.goo.gl/QeUMSCKKWmdC7S3M9',
 'biographies'
);

insert into e_book
values
(31,
 'MS Dhoni',
 'Byjus',
 2023,
 'This book is centered around the life, leadership, and cricketing career of MS Dhoni, former captain of the Indian cricket team. It focuses on his journey from a small-town boy to one of the greatest cricketers of all time. The book provides insights into his calm demeanor, leadership style, and his iconic moments on the field. It also serves as a source of inspiration for young readers, particularly in the context of overcoming obstacles and leading with resilience',
 'https://cdn1.byjus.com/wp-content/uploads/2022/10/MS-Dhoni-Biography.docx.pdf',
 'https://images.app.goo.gl/DNpFiX1yqoiWT1xr8',
 'biographies'
);

insert into e_book
values
(32,
 'Modern Indian History (NCERT XII)',
 'Dr. Bipan Chandra',
 2009,
 'This book deals with the modern period of Indian history. Effort has been made in this book to lay emphasis on forces, movements and institutions rather than on military and diplomatic events and on individual administrators and political leaders. The 18th century society, economy and political system have been discussed at length in order to indicate the social situation which enabled a company of foreign merchants to conquer this vast land. The nature and character of British imperialism, its impact on the social, economic and administrative life of India, and the Indian response have also been dealt with in detail. Finally, the strengthening of the idea of nationhood in the country and the development of a countrywide struggle against foreign rule, culmi- nating in the attainment of independence, is studied. An attempt has also been made to place events in their world setting. The Board of Editors is grateful to Dr. Bipan Chandra for under- taking the writing of this book. The Board has gone through the text carefully and accepts full responsibility for the final version',
 'https://blogmedia.testbook.com/blog/wp-content/uploads/2022/12/class-12-modern-india-book-by-bipan-chandra-c14b0baa.pdf',
 'https://images.app.goo.gl/1aENp7nciUHikrPAA',
 'upsc'
);

insert into e_book
values
(33,
 'Fundamentals of Human Geography (NCERT XII)',
 'NCERT',
 2020,
 'Fundamentals of Human Geography is a textbook for Class XII students, published by NCERT. The book focuses on the relationship between humans and their environment, exploring topics such as population, migration, human settlements.',
 'https://i.filecdn.in/755esias/Class-12__Geography-1652245874675.pdf',
 'https://images.app.goo.gl/VQcMcavRa8wh7Rh49',
 'upsc'
);


insert into e_book
values
(34,
 'Indian Polity, Sixth Edition',
 'M Laxmikanth',
 2020,
 'I am pleased to place before the readers a thoroughly revised, enlarged and updated edition of this widely read book on Indian Polity. In 2011 and 2013, the UPSC changed the pattern and syllabus of the preliminary and main examinations, respectively. Both times, the scope of Indian Polity has been considerably increased. Hence, this new edition of the book is more relevant now and is aimed to meet the expanded needs of the aspirants',
 'https://educratias.com/wp-content/uploads/2023/08/Indian_Polity_Laxmi-Kant-6th-Edition-.pdf',
 'https://images.app.goo.gl/9nJc8TFGzGDisLAs6',
 'upsc'
);

insert into e_book
values
(35,
 'Economic Development & Policies in India',
 'Jain & Ohri',
 2018,
 'The main objective of this book, Indian Economic Development, is to
expose the learners to some of the key issues facing the Indian economy.
In this process, as young adults, they are expected to be sensitised about
these issues, appreciate and learn to critically assess the role of the
government in various economic spheres. The book also provides
opportunities for knowing what economic resources are and how these
resources are being utilised in different sectors. The learners are also
exposed to numerical information relating to various aspects of Indian
economy and India’s economic policies. They are expected to develop
analytical skills, interpret the economic events and visualise the
economic future of India. Nevertheless, conscious effort has been made
not to burden the learner with concepts and data.',
 'https://afeias.com/wp-content/uploads/2019/04/class11_economics_english.pdf',
 'https://images.app.goo.gl/PbX5qUDXkR2C5Ge78',
 'upsc'
);

insert into e_book
values
(36,
 'Contemporary World History',
 'Arjun Dev',
 2018,
 'This book is essential for understanding the Modern World History component of General Studies Paper I in the UPSC exam. It covers major global events from the 18th century to the present day, with a focus on the French Revolution, World Wars, decolonization, and the rise of new world powers. The book is particularly useful for understanding political, economic, and social developments across the globe in the modern era',
 'https://chahalacademy.com/admin_theme/book_file/India%20and%20Contemporary%20World-Class%20X.pdf',
 'https://m.media-amazon.com/images/I/7114sJk0BeL._AC_UF1000,1000_QL80_.jpg',
 'upsc'
);

insert into e_book
values
(37,
 'Rich Dad poor dad',
 'Robert Kiyosaki',
 1997,
 'Rich Dad Poor Dad by Robert T. Kiyosaki is a personal finance book that contrasts the financial philosophies of two father figures: Kiyosak is biological father (the "Poor Dad") and the father of his best friend (the "Rich Dad")',
 'https://archive.org/download/rich-dad-poor-dad_202106/Rich%20Dad%20Poor%20Dad.pdf',
 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg',
 'finance'
);

insert into e_book
values
(38,
 'The pyschology of money',
 'Morgan Housel',
 2020,
 'The Psychology of Money by Morgan Housel (2020) explores the emotional and psychological factors that shape how people think about money and make financial decisions. Through 20 short chapters, Housel emphasizes that financial success is more about behavior, mindset, and long-term thinking than technical knowledge. The book highlights themes like the importance of patience, understanding risk, and the power of compounding, offering insights into how personal experiences and biases influence our relationship with money.',
 'https://internetmediagroup.bg/wp-content/uploads/2023/03/the-psychology-of-money-by-morgan-housel.pdf',
 'https://m.media-amazon.com/images/I/41Bunq66ccL._AC_UF1000,1000_QL80_.jpg',
 'finance'
);

insert into e_book
values
(39,
 'Think and Grow Rich',
 'Napolean Hill',
 1937,
 'Think and Grow Rich by Napoleon Hill is a classic self-help book that outlines 13 principles for achieving personal and financial success. Published in 1937, the book is based on Hill’s study of successful individuals, including Andrew Carnegie, Thomas Edison, and Henry Ford',
 '' ,
 '' ,
 'finance'
);

insert into e_book
values
(40,
 'The Intelligent Investor',
 'Benjamin Graham',
 1949,
 'The Intelligent Investor by Benjamin Graham is a foundational book on value investing, first published in 1949. It teaches investors how to approach the stock market with a long-term, disciplined mindset, focusing on strategies to minimize risk and maximize returns. Graham emphasizes the importance of value investing, where investors buy undervalued stocks with strong fundamentals, and he introduces key concepts like margin of safety and Mr. Market.',
 'http://dspace.vnbrims.org:13000/jspui/bitstream/123456789/1732/1/The_intelligent_investor%20(1).pdf',
 'https://149347908.v2.pressablecdn.com/wp-content/uploads/2019/01/the-intelligent-investor.jpg',
 'finance'
);

insert into e_book
values
(41,
 'The Richest Man in Babylon',
 ' George S. Clason',
 1926,
 'The Richest Man in Babylon is a 1926 book by George S. Clason that dispenses financial advice through a collection of parables set 4,097 years earlier, in ancient Babylon. The book remains in print almost a century after the parables were originally published, and is regarded as a classic of personal financial advice.',
 'https://thediamondsmine.com/files/Ebooks/Clason-RichestManInBabylon.pdf',
 'https://i0.wp.com/pageaters.com/wp-content/uploads/2024/01/the-richest-man-in-babylon-tkCfvIJeKR-1652119439340.jpg',
 'finance'
);

insert into e_book
values
(42,
 'Principles life and work',
 'Ray Dalio',
 2017,
 'According to Dalio, principles are the fundamental truths that determine how you behave. They reflect your inner character and individual values. People who align in principles get along with each other, while people who dont have constant conflicts and misunderstandings',
 'https://uploads-ssl.webflow.com/5dfc6b53305f515787db819a/5e035622ed2a277eb557c13a_Principles%20-%20Dalio%2C%20Ray.pdf',
 'https://www.principles.com/assets/book-cover-tall-principles-56e834304a4509f7dd17798fb044702d6a3611c43e4df647a4b39920227cc901.png',
 'finance'
);

insert into e_book
values
(43,
 'The Total Money Makeover',
 ' Dave Ramsey',
 2003,
 'The book outlines a proven plan for getting out of debt, building an emergency fund, and investing for the future. Ramseys approach focuses on discipline and the "debt snowball" method—paying off debts from smallest to largest to build momentum. Its a practical, no-excuses guide to transforming your financial life, offering simple strategies for budgeting, saving, and building wealth over time.',
 'https://finance.uonbi.ac.ke/sites/finance.uonbi.ac.ke/files/The%20Total%20Money%20Makeover%20-%20Dave%20Ramsey.pdf',
 'https://m.media-amazon.com/images/I/81eCiKyn8IL.jpg',
 'finance'
);

insert into e_book
values
(44,
 'The 4-Hour Workweek',
 'Timothy Ferriss',
 2007,
 'Ferriss introduces the concept of the "New Rich"—those who design their lives around what they value most, using tools like remote work, delegation, and creating passive income streams. The book encourages readers to focus on efficiency, eliminate unnecessary tasks, and embrace a lifestyle of travel, leisure, and entrepreneurship, all while working fewer hours.',
 'http://dspace.vnbrims.org:13000/jspui/bitstream/123456789/4910/1/The%204-Hour%20Workweek%2C%20Expanded%20and%20Updated%20Expanded%20and%20Updated%2C%20With%20Over%20100%20New%20Pages%20of%20Cutting-Edge%20Content..pdf',
 'https://m.media-amazon.com/images/I/6142S0D-PiL._AC_UF1000,1000_QL80_.jpg',
 'finance'
);






















