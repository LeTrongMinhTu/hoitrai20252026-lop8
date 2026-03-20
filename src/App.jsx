import './App.css'

function App() {
  return (
    <>
      <div id="top"></div>
      <section className="navbar-no-2-section">
        <div className="right-nav-no-2-wrapper">
          <a href="#Loi-gioi-thieu" className="navbar-item">Mở đầu</a>
          <a href="#cau-truc" className="navbar-item">Cấu trúc</a>
          <a href="#Phu" className="navbar-item">Phụ</a>
        </div>
        <div className="left-nav-no-2-wrapper">
          <a href="#Contact" className="navbar-item">Contact</a>
        </div>
      </section>
      <section className="content-section">
        <article id="Loi-gioi-thieu" className="content-article">
          <div className="content-intro-wrapper">
            <h1>Giới thiệu chung</h1>
            <p>Chào mừng bạn đến với trang web của lớp 8/2!</p>
          </div>
          <div className="content-intro-body-wrapper">
            <p><br />Lớp tôi 8/2 là một tập thể nhỏ nhưng tràn đầy năng lượng và tinh thần đoàn kết. Chủ nhiệm bởi cô giáo Võ Thị Mỹ Thuận - một giáo viên dạy Văn hấp dẫn và vô cùng quý mến, lớp chúng tôi nhận được sự dìu dắt tận tình của cô và được cô hỗ trợ rất nhiều trong năm học này. Mỗi ngày đến trường là một ngày chúng tôi cùng nhau học tập, chia sẻ và trưởng thành. Trong lớp, mỗi bạn đều mang một cá tính riêng, tạo nên bức tranh đa sắc rất thú vị. Dù khác nhau, chúng tôi luôn biết cách gắn kết và hỗ trợ nhau trong học tập cũng như cuộc sống. Không khí lớp học lúc nào cũng sôi nổi với những giờ thảo luận, phát biểu ý kiến. Chúng tôi không ngừng học hỏi, tiến bộ từng ngày. Những kỉ niệm vui buồn cứ thế tích lũy, trở thành hành trang quý giá. Lớp 8/2 không chỉ là nơi học kiến thức mà còn là mái nhà thứ hai. Ở đó, chúng tôi học cách sẻ chia, cảm thông và trưởng thành hơn. Chính vì vậy, lớp 8/2 đối với mỗi cá nhân luôn là niềm tự hào và yêu thương lớn nhất trong quãng đời học sinh.</p>
            <p><br />Là một tập thể luôn cố gắng và yêu thương nhau, lớp 8/2 luôn là nơi chúng tôi cảm thấy an toàn và hạnh phúc. Sau mỗi tiết học, mỗi bạn trong lớp đều có thêm những kiến thức và trải nghiệm bổ ích, góp phần xây dựng cuộc sống tươi đẹp cho bản thân và cộng đồng. Với lí tưởng sống cao đẹp, lớp 8/2 luôn là nơi chúng tôi học hỏi và phát triển.</p>
            <div className="img-lop-8-2">
              <img src='/anhlop8.jpg' alt="Ảnh lớp 8/2" />
            </div>
            <p><br />Bức ảnh trên là một bức ảnh vô cùng dễ thương được lớp chúng tôi chụp lại 8/3 năm 2026 này. Lúc ấy, lớp trưởng và các bạn nam đã tặng một bất ngờ vô cùng to lớn cho các chị em phụ nữ và cô giáo, khiến các bạn rất vui và hạnh phúc (có bạn còn khóc nữa)</p>
            <div className="img-lop-8-2">
              <img src='/MDMX.jpg' alt="Ảnh lớp 8/2" />
            </div>
            <p><br />Ảnh này được chụp lại vào mùa xuân năm ngoái, trên sân khấu trung tâm văn hóa, sau một hành trình khổ luyện cho lễ hội mừng đảng mừng xuân </p>
            <div className="img-lop-8-2-anh-thang khung">
              <div className="img-left">
                <img src='/anhghepthang.jpg' alt="Ảnh lớp 8/2" />
                <div className="img-left-caption">
                  <p>Dù không ít lần cãi nhau, chúng tôi vẫn đoàn kết và vững vàng trên con đường xây dựng một lớp học lành mạnh và hạnh phúc. Chúng tôi luôn tự hào và hãnh diện vì được học tập trong môi trường đầy rẫy tiếng cười như thế này.</p>
                </div>
              </div>
              <div className="img-right">
                <p>Khi nói về những kỉ niệm này, không ai không nhớ được cả. Tất cả đều đồng vai trò quan trọng và đã là một phần của tuổi học sinh. Với những kỉ niêm này, chúng tôi đã học được rất nhiều điều quý báu. Đây không phải là bức ảnh đẹp do một nhiếp ảnh gia nào đó chụp, nhưng nó là cả bầu trời thanh xuân của chúng tôi.</p>
                <img src='/anhghepthang1.png' alt="Ảnh lớp 8/2" />
              </div>
            </div>
            <p style={{marginTop: "20px"}}>Nếu để trình diễn hết tất cả ảnh thì nó sẽ rất nhiều. Trên đây có lẽ là một phần rất rất nhỏ về những kỉ niệm của chúng tôi. Những kỉ niệm ấy sẽ mãi là kỷ vật quý giá trong hành trình tuổi học sinh của mỗi người.</p>
          </div>
        </article>
        <article className="BCS-tree" id="cau-truc">
          <div className="tree-intro">
            <h1>Cấu trúc lớp</h1>
          </div>
          <div className="tree-wrapper-vertically">
            <div className="tree-level-1">
              <div className="tree-role">
                <h3>Giáo viên chủ nhiệm</h3>
                <span className="tree-name"><h3>Võ Thị Mỹ Thuận</h3></span>
              </div>
            </div>
            <div className="tree-level-2">
              <div className="tree-role">
                <h3>Lớp trưởng</h3>
                <span className="tree-name"><h3>Lê Trọng Minh Tú</h3></span>
                </div>
            </div>
            <div className="tree-level-3">
              <div className="tree-level-wrapper">
                <div className="tree-role">
                  <h3>Lớp phó học tập</h3>
                  <span className="tree-name"><h3>Trần Ngọc Gia Bảo</h3></span>
                </div>
                <div className="tree-role">
                  <h3>Lớp phó kỉ luật</h3>
                  <span className="tree-name"><h3>Lê Nguyễn MInh Nguyệt</h3></span>
                </div>
                <div className="tree-role">
                  <h3>Lớp phó lao động</h3>
                  <span className="tree-name"><h3>Trần Thị Thanh Thảo</h3></span>
                </div>
                <div className="tree-role">
                  <h3>Lớp phó văn nghệ</h3>
                  <span className="tree-name"><h3>Nguyễn Khánh Vy</h3></span>
                </div>
              </div>
            </div>
            <div className="tree-level-4">
              <div className="tree-level-wrapper">
                <div className="tree-role">
                  <h3>Tổ trưởng tổ 1</h3>
                  <span className="tree-name"><h3>Lê Nguyễn Minh Nguyệt</h3></span>
                </div>
                <div className="tree-role">
                  <h3>Tổ trưởng tổ 2</h3>
                  <span className="tree-name"><h3>Bùi Kim Ngân</h3></span>
                </div>
                <div className="tree-role">
                  <h3>Tổ trưởng tổ 2</h3>
                  <span className="tree-name"><h3>Nguyễn Khánh Vy</h3></span>
                </div>
                <div className="tree-role">
                  <h3>Tổ trưởng tổ 2</h3>
                  <span className="tree-name"><h3>Trịnh Minh An</h3></span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="stories" id="stories-6-8">
          <br />
          <div className="stories-intro">
            <h1>Câu chuyện thần kì</h1>
          </div>
          <div className="stories-content">
            <div className="stories-body-lop">
              <h3>Năm lớp 7:</h3>
              <p>Vào năm lớp 7, một năm học chúng tôi đã có thể nói là bạn bè của nhau và biết nhau được một năm. Mọi thứ đều trở nên vô cùng dễ chịu và quan thuộc đối với chúng tôi. Sau mùa hè ấm áp, chúng tôi trở lại với sự hào hứng và sẵn sàng cho một năm học mới. Chúng tôi nhìn mặt nhau mà tự hỏi "Sao các cậu lại lớn nhanh đến vậy?". Với sự chèo lái của cô Phạm thị Thanh Hướng, lớp 7/2 giông buồm ra biển lớn và đạt được những thành công nhất định. Năm ấy quả là ki diệu, lớp tôi đã đạt được những thành tích vô tiền khoáng hậu vầ có lẽ sẽ rất rất khó để tái hiện được, như cách mà U23 Việt Nam đề vì nhì giải châu Á năm 2019 vậy. Đối với tôi, năm ấy là một năm thật cảm xúc và thanh xuân. Chưa bao giò tôi trải qua một năm ấm áp và vui nhộn đến vậy. Là một người đã ngồi học 8 năm (không tính mẫu giáo), tôi chưa từng có một kỉ niệm nào hạnh phúc hơn khoảng thời gian ấy</p>
              <div className="stories-body-wrapper-img-and-text">
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/anhdaihoichidoi7.jpg" alt="Đại hội chi đội" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Mở đầu với đại hội chi đội lớp chúng tôi, mọi thành vien đều giơ cao cánh tay biểu quyết. Chúng tôi vạch ra những chỉ tiêu và kế hoạch thực hiện những mục tiêu ấy. Sự vui vẻ và phấn khởi là điều ai cũng thấy. Với tư cách là chi đội trưởng, bạn Trần Ngọc Gia Bảo phát biểu, tổng kết năm học 2023-2024 và đề ra những kế hoạch mà nhận được sự tán thành rất lớn. </p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/thicamhoa7.jpg" alt="Thi cắm hoa" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Cuộc thi căm hoa được ba bạn Gia Bảo, Kim Ngân và Khánh Vy tham gia. Đây là một cuộc thi vô cùng sáng tạo và mở mang trí thức rất lớn cho cả ba bạn. Với sự nhiệt huyết và sáng tạo của tuổi trẻ, ba bạn đã tạo nên một kết quả vô cùng xứng đáng. Kết thúc cuộc thi, ba bạn nhận được giải ba, góp phần tô điêm thêm cho giải thành tích của lớp. </p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/dabanh7.jpg" alt="Đá bóng và hội khoe Phù Đổng" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Thể thao là một phần vô cùng quan trọng trong đời mỗi con người. Trong năm học này, đội bóng 7/2 đã khoong dành được những chiến thắng nức lòng người hâm mộ nhưng đã chiến thắng trong lòng người hâm mộ. Gặp 8/10 trong vòng loại đầu tiên là một kết quả bất lợi. Tuy vậy, các chiến binh đã chiến đấu quả cảm và vô cùng xuất sắc, cầm chân 0 - 0 đối thủ hiệp một. Chỉ đáng tiếc khi đang có thể trận ổn định, một bàn thắng của đội bạn đã làm hàng thủ 7/2 bị suy yếu và tâm lí dẫn đến những bàn thắng sau đó. Dù không mang về kết quả thắng lợi, các bạn của tôi đã vô cùng xuất sắc, dành được sự tôn trọng của các phụ huynh và đối thủ. Chúng tôi tự hào về giải thể thao năm ấy</p>
                    <p>Ngoài bóng đá, giải thể thao năm ấy còn động lại những kỉ niệm đáng nhớ với nhất cờ vua trường nam nữ của bạn Bách và Vy. Sau này, bạn Bách còn đạt được thành công lớn trong cuộc thi cấp tỉnh và Quốc Gia. Bơi lội có sự tham gia của Việt Hoàng xuất sắc đạt giải cao trong cả ếch và tự do. Bóng bàn cũng do tài năng trẻ Việt Hoàng đảm  nhận cũng đạt thành tích rất cao.</p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/thikechuyenlichsu7.jpg" alt="Hội thi kể chuyện lịch sử" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Hội thi kể chuyện lịch sử là một sự kiện chúng tôi chưa bao giờ quên. Các bạn biết không? Chúng tôi đã không vui vẻ tí nào vì bị bắt đi tham gia các hoạt động phong trào kiểu này, vốn thì lớp chúng tôi cũng có thể gọi là "lười". Nhưng sau khi tập luyện vài hôm, chúng tôi vô cùng háo hức và một cảm giác sục sôi kì lạ, tôi không biết giải thích làm sao nữa. Các bạn biết chúng tôi đã hạnh phúc thế nào trong khoảng thời gian ấy. Từng buổi tập luyện là từng mảnh ghép niềm vui. Đến với trường, chúng tôi trình bày về câu chuyện của bác sĩ Đặng Thùy Trâm - một người vô cùng nhân hậu và vị tha trong kháng chiến chống xâm lược của đất nước ta. Chung cuộc, tôi không nhớ là đạt giải ba hay khuyến khích, nhưng nó vẫn là một tiết mục rất vui! </p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/mdmx7-1.jpg" alt="Mừng Đảng mừng Xuân" />
                    <img src="/mdmx7-2.jpg" alt="Mừng Đảng mừng Xuân" />
                    <img src="/mdmx7-3.jpg" alt="Mừng Đảng mừng Xuân" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Mừng Đảng mừng Xuân là một lễ hội vô cùng quý giá và khó quên. Chúng tôi cũng từng rất mệt mỏi nhưng vì tập thể, chúng tôi vẫn đi tập luyện thường xuyên. Đối với tôi, đây là cuộc thi kì lạ và đáng nhớ nhất, hơn bất kì cuộ thi nào. các bạn biết không? Mừng Đảng mừng Xuân cho phép chúng tôi múa, và chúng tôi đã chọn bài "Giai điệu Việt Nam mình" của Masew. Bài hát ấy không quá hay nhưng nó mang âm hưởng của thời đại mới và sự yêu nước. Ban phân hội thuê biên đạo múa tập cho, chúng tôi gần như tập luyện mỗi chiều, sau mỗi buổi học với sự hào hứng. Phụ huynh và cô Hương hay mua thức ăn và trà sữa cho bọn tôi ăn uống nghỉ ngơi giữa buổi tập. Ngày thi càng gần, chúng tôi càng háo hức nhưng cũng lo lắng. Sáng thứ 6 ngày định mệnh, chúng tôi 5h sáng đã có mặt tại nhà cô Hương trang điểm và vuốt tóc, lên biểu diễn thử trên trung tâm văn hóa sáng hôm ấy 7h sáng. Chiều cùng ngày, chúng tôi có mặt tại nhà cô chủ nhiệm, ăn gà rán cùng nhau và trang điểm lần cuối. Tôi và những người bạn đi dạo một vòng quanh phố, nhận ra rằng sau khoảng khắc vinh quang trên sân khấu, mọi cung bậc cảm xúc sẽ khép lại và mọi chuyện cũng kết thúc. Bởi vậy, chúng tôi chỉ muốn làm tốt nhất để sự kiện này kết thức trong niềm vui và hạnh phúc. Vì lí do nào đó, chúng  tôi lên trễ gần 30 phút, nhưng mọi chuyện vẫn ổn, làm chúng tôi hơi hoảng loạn. Đứng phía sau cánh gà, chúng tôi vô cùng lo lắng và bồn chồn, tôi ngồi một góc và cố gắng ổn định nhịp tim mình lại. Và rồi, thời khắc ấy đến, chúng tôi bước lên sân khấu với sự tập trung cao độ, nhạc lên và chúng tôi nhảy. Tiếng nhạc sập sình theo tiếng nhịp tim đang rền vang trong lòng ngực, tôi cảm nhện tiếng tim đạp còn mạnh mẽ hơn tiếng ba mẹ chúng tôi đang hò hét dưới ấy. Khoảng khắc lo sợ của tôi đã đến, chúng tôi kết thúc màn trình diễn ấn tượng, nhận được sự tán dương của khán giả, nhưng... thời khắc chúng tôi bước ra sau cánh gà cũng đã khép lại một hành trình huyền diệu. Một sự hoài niệmh đang bào trùm tôi, nhưng tôi vẫn vui vẻ trò chuyện cùng các bạn...</p>
                  </div>
                </div>
                <p>Sau những sự kiện trên, lớp chúng tôi cũng không có qua nhiêu sự kiện khác diễn ra. Nhưng cuộc thi học sinh giỏi tháng 4 năm ấy cũng hết sức đặc biêt. 7 hthis sinh tham gia đều đạt giải tất cả (bao gồm Lê trọng Minh Tú(Toán), Đỗ Quang Minh(Toán), Bùi Kim Ngân (Tiếng Anh), Trần Ngọc Gia Bảo(Tiếng Anh), Nguyễn Phan Việt Hoàng(Tiếng Anh), Nguyễn Lê Như Ngọc(Văn), Trịnh Minh An(Văn)), trong đó hai giải nhất thành phố của bạn: Lê Trọng Minh Tú và Bùi Kim Ngân, giải nhì thuộc về Trần Ngọc Gia Bảo, giải ba thuộc về Trịnh Minh An, các giải khuyến khích thuộc về Nguyễn Lê Như Ngọc, Đỗ Quang Minh và Nguyễn Phan Việt Hoàng.</p>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/begiang7.jpg" alt="Mừng Đảng mừng Xuân" />
                    
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Kết thúc chuyến hành trình kì diệu này, lễ bế giảng diễn ra vào ngày 27-5-2025 đã chấm dứt hành trình năm lớp 7 vô cùng đặc biệt và hạnh phúc. Bạn Lê Trọng Minh Tú dành được giải học sinh nhì khối 7 trong năm học này, càng tô điểm thêm cho khối thành tích lớp. Sau buổi bế giảng, chúng tôi bắt tay nhau tạm biệt, hẹn gặp lại. Bước vào 3 tháng nghỉ hè, chúng tôi lập kế hoạch cho sự lột xác vào năm sau. Mỗi bạn là một "đống" thành tích tên tay, "mảnh kí ức" của chúng tôi kết thúc như vậy đấy, mở ra một kỉ nguyên nữa sắp sửa chào đón chúng tôi vào năm học sắp tới.</p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </article>
      </section>
      <nav className="navbar">
        <a href = "#Loi-gioi-thieu" className="item-link"><div className="item">
            <span className="material-icons">home</span>
            <span className="item-text" style={{ index: 0 }}>Lời giới thiệu</span>
        </div></a>

        <a href = "#cau-truc" className="item-link"><div className="item">
            <span className="material-icons">menu_book</span>
            <span className="item-text" style={{ index: 1 }}>Cấu trúc</span>
        </div></a>

        <a href = "#thu-vien-de" className="item-link"><div className="item">
            <span className="material-icons">library_books</span>
            <span className="item-text" style={{ index: 2 }}>Thư viện đề</span>
        </div></a>

        <a href = "#cham-diem-giong-noi" className="item-link"><div className="item">
            <span className="material-icons">book</span>
            <span className="item-text" style={{ index: 3 }}>Chấm điểm giống nói</span>
        </div></a>

        <a href = "#top" className="item-link"><div className="item">
            <span className="material-icons">arrow_back</span>
            <span className="item-text" style={{ index: 4 }}>Đầu trang</span>
        </div></a>
      </nav>
    </>
  );
    
}

export default App;