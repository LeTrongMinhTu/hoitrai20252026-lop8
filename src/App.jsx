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
              <h3>Năm lớp 6:</h3>
              <p>Năm lớp 6 là một năm vô cùng bở ngõ đối với chúng tôi. Chúng tôi bước vào mái trường cấp hai với sự lo âu và đôi phần sợ hãi. Rời xa mái trường cấp một ấm áp và bình yên, chúng tôi rụt rẽ bước vào ngày khai giảng năm đầu cấp với sự nôn nao khó tả. Được thầy cô và anh chị dắt tay tiến vào cổng trường, chúng tôi đi qua ánh mắt "phán xét" của hàng nghìn anh chị, thứ đã làm chúng tôi hãi hùng. Thực tình, năm học ấy cũng chả có gì quá nhiều bởi chúng tôi cũng chư quen biết gì nhau, những kỉ niệm chỉ thoáng qua nhẹ nhàng, chẳng để lại nhiều ấn tượng. Nhưng cũng vì vậy, tình bạn chúng tôi lúc ấy là trong sáng và hồn nhiên nhất</p>
              <div className="stories-body-wrapper-img-and-text">
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/anhbaotang6.jpg" alt="Đại hội chi đội" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Bảo tàng là một nơi trưng bày những di tích, hiện vật lịch sử của một vùng đất nào đó. Đầu năm học, chúng tôi được trường cho đi tham quan bảo tàng tỉnh Quảng Nam, nơi lưu giữ những hiện vật từ thời Chăm Pa của vùng đất này. Mỗi người chúng tôi tự đi xe đạp hoặc bố mẹ chở lên đây, tập hợp lại, bỏ vật dụng cá nhân vào một hộp tủ, sau đó thì mỗi người một bút và sổ nhỏ ghi chép đi tham quan theo cô hướng dẫn. Chúng tôi đi từ tầng một đến tầng ba, trải qua những hiện vật cổ kính như tượng Phù điêu vũ nữ Apsara, nhà sàn, súng trường, mộ chum, những tảng đấ, tranh vẽ, bom, đạn, trang bị chiến đấu,... và cả được xem trình chiếu về văn hóa Sa huỳnh. Cuối cùng, các cô hướng dẫn tổ chức trò chời cho chúng tôi chơi và lấy giải thưởng. </p>
                  </div>
                </div>
                <p>Năm lớp 6 cũng chả có gì nhiều. Năm này, bọn tôi còn sợ sệt và rụt rè nên không chơi với nhau quá nhiều. Đặc biệt, năm này giải thể thao cũng có thể gọi là một thành công. Nhất nam nữ cờ vua (Trần Hoàng bách, Nguyễn Khánh Vy), nhì hay ba giai bơi tự do và ếch (Nguyễn Phan Việt Hoàng), nhì bóng bàn (Nguyễn Phan Việt Hoàng) và các thành tích cao trong bóng đá, cầu lông. Năm này, nhiều bạn như Trần Hoàng Bách, Nguyễn Phan Vệt Hoàng còn được tham dự vòng thi hội khỏe phù đổng cấp quốc gia. </p>
                <p>Năm này, chúng tôi còn có 6 bạn thi học sinh giỏi cấp thành phố: Lê Trọng Minh Tú (toán), Bùi Kim Ngân (Tiếng Anh), Trần Ngọc Gia Bảo (Tiếng Anh), Nguyễn Phan Việt Hoàng (tiếng Anh), Trịnh Minh An (Văn), Nguyễn Lê Như Ngọc (Văn). Trong đó, cả 6 thí sinh đều đoạt giải từ khuyến khích đến nhất (Bùi Kim Ngân).</p>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/anhtongket6.jpg" alt="Tổng kết 6" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Tổng kết năm học 2023-2024, nhà trường, ban phân hội, và cô Ái Ca trao phần thưởng cuối năm cho các học sinh. Tổng số học sinh đạt danh hiệu HSG + Xuất sắc khoảng 70% số lượng học sinh của lớp. Tổng kết năm học đầu cấp, tất cả học sinh đều lên lớp và đạt chỉ tiêu đại hội đã nêu ra đầu năm. Bọn tôi vô cùng háo hức chờ đợi ngày bế giảng và mùa hè ấm áp sắp tới.</p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/anhbegiang6.jpg" alt="Bế giảng 6"/>
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Bế giảng năm học này là một cột mốc đặc biệt vì nó ghi dấu sự kết thúc của năm học đầu tiên mà chúng tôi được học bên nhau. Nhiều bạn được lên trước toàn thể học sinh nhận giấy khen. Sau buổi bế giảng ấy, bọn tôi về lớp chụp hình và nói chuyện vui vẻ một tí nữa trước khi đi về. Khép lại hành trình đầu tiên, bọn tôi bắt tay nhau thật chặt và hẹn gặp lại nhau trong năm sau. </p>
                  </div>
                </div>
              </div>
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
                    <img src="/begiang7.jpg" alt="Bế giảng lớp 7" />
                    
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Kết thúc chuyến hành trình kì diệu này, lễ bế giảng diễn ra vào ngày 27-5-2025 đã chấm dứt hành trình năm lớp 7 vô cùng đặc biệt và hạnh phúc. Bạn Lê Trọng Minh Tú dành được giải học sinh nhì khối 7 trong năm học này, càng tô điểm thêm cho khối thành tích lớp. Sau buổi bế giảng, chúng tôi bắt tay nhau tạm biệt, hẹn gặp lại. Bước vào 3 tháng nghỉ hè, chúng tôi lập kế hoạch cho sự lột xác vào năm sau. Mỗi bạn là một "đống" thành tích tên tay, "mảnh kí ức" của chúng tôi kết thúc như vậy đấy, mở ra một kỉ nguyên nữa sắp sửa chào đón chúng tôi vào năm học sắp tới.</p>
                  </div>
                </div>
              </div>
              <div className="stories-body-wrapper-img-and-text">
                <h3>Năm lớp 8:</h3>
                <p>Năm lớp 8 này cũng thật là vui. Dù bọn mình chưa đi hết cuộc hành trình này nhưng bọn tôi đã quên thuộc và hiểu biết với nhau thật nhiều. Bọn tôi trong năm nay thật sự hào hứng và vui nhộn. Dù năm học chưa kết thúc nhưng đến bấy giờ, bọn tôi đã tạo nên được những kỉ niệm độc đáo. Từ những buổi tập luyện bóng đá và bóng chuyền chăm chỉ, đến những giờ các bạn nam tổ chức 20-10, 8-3 cho các bạn nữ, rồi các bạn nữ lại tổ chức 19-11 lại cho các bạn nam, lớp tôi năm nay vui nhộn biết bao. Năm nay có lẽ không ki niệm như năm lớp 7, nhưng năm nay tập thể lớp 8/2 thể hiện tinh thần đoàn kết và yêu thương nhau.</p>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Daunam8.jpg" alt="Đầu năm lớp 8" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Mở đầu năm học lớp 8, lớp tôi đựo chèo lái bởi cô Võ Thị Mỹ Thuận đầy nhiệt huyết và năng lượng. Lớp đã chuyển đi ba bạn: Diệu Huyền, Minh Quân và Bảo Hân nhưng có thêm bạn Lê Phan Quang long từ Đã Năng do sự sáp nhập tỉnh. Đâu ai biết rằng đây sẽ là khởi đầu của một cuộc hành trình đầy ấn tượng. Bọn tôi vui vẻ chào đón nhau và tràn đầy năng lượng cho năm học mới.</p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Tapluyenbongda8.jpg" alt="Tập luyện bóng đá lớp 8" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Thể thao là một trong những thứ rất quan trọng trong đời mỗi con người, đặc biệt là học sinh. Nó khơi gợi sơ thích và niềm tin trong bạn trẻ, rèn luyện thể dục thể thao giúp các bạn phát triển sức khỏe. Trong năm học này, bọn tôi đã được thi đấu thêm môn nhảy xa, nhảy cao và bóng chuyền. Bọn tôi phải đi tập luyện liên tục, nhưng bọn tôi vẫn rất vui vẻ và tràn đầy sức chiến đấu.</p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Chiendau8.jpg" alt="Trận chiến lớp 8" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Trong những trận thể thao, lớp học không chỉ thi đấu bằng sức lực mà còn bằng tinh thần đoàn kết và ý chí kiên cường. Mỗi thành viên đều hiểu rằng chiến thắng không đến từ cá nhân xuất sắc nhất mà từ sự phối hợp nhịp nhàng của cả tập thể. Dù gặp đối thủ mạnh hay rơi vào thế bất lợi, cả lớp vẫn luôn giữ vững tinh thần, động viên nhau từng chút một, không bỏ cuộc giữa chừng. Những tiếng hò reo, cổ vũ từ bên ngoài sân càng tiếp thêm động lực để các bạn thi đấu hết mình. Chính sự gắn kết, quyết tâm và niềm tin vào nhau đã giúp lớp vượt qua khó khăn, chiến đấu đến giây phút cuối cùng và để lại những kỷ niệm đáng nhớ.</p>
                    <br />
                    <p>Trong giải thể thao năm nay, vẫn là Bách và Hoàng là hai vận động viên xuất sắc được dự thi thành phố và đạt giải cao ở các bộ môn cờ vua, bơi lội và bóng bàn. Ngoài ra, những giải khác vẫn có nhưng có lẽ không quá nổi bật đâu! Dù sao thì bọn tôi vẫn đã nổ lực hết sức và tự hào về những thành quả của mình. Lớp 8/2 không cần những chiến tích "đi bằng cửa sau", bọn tôi tự lực và tự hào về nó!!!</p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Trungthu8.jpg" alt="Trung thu" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Lễ hội Trung thu do trường tổ chức cũng là một lễ hội vui mà lớp 8/2 đã tham gia. Trong nhóm làm lồng đèn có 5 bạn Gia bảo, Kim Ngân, Minh An, Uyên Phương, Như Ngọc tham gia. Bọn tôi tập trung lại chuẩn bị cho mặt trăng tự làm cho cuộc thi ở nhà Uyên Phương vào mỗi sáng. Mỗi người mang kiến thức và nhiệt huyết bên trong mình để góp phần hoàn thành cuộc thi. Với sự trình bày sôi động của hai bạn Gia bảo, Kim Ngân, "mặt trăng của lớp 8/2 " hiện ra như là một mặt trăng thật sự, nhưng cũng là một tác phẩm vô cùng quý giá do mỗi con người của lớp cấu tạo nên.</p>
                  </div>
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Baodoi8.jpg" alt="Báo đội" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Hoạt động làm báo đội là một trong những dịp để cả lớp thể hiện tinh thần đoàn kết, sáng tạo và trách nhiệm với tập thể. Mỗi thành viên đều góp phần vào từng trang báo, từ việc lên ý tưởng, viết bài, vẽ minh họa cho đến trang trí và hoàn thiện sản phẩm. Dù có những lúc gặp khó khăn hay bất đồng ý kiến, cả lớp vẫn cùng nhau bàn bạc, lắng nghe và hỗ trợ để đạt được kết quả tốt nhất. Không chỉ là một sản phẩm dự thi, tờ báo đội còn chứa đựng tình cảm, sự cố gắng và dấu ấn riêng của tập thể. Qua đó, mỗi người thêm hiểu nhau hơn, gắn bó hơn và cùng nhau tạo nên một kỷ niệm đẹp trong quãng đời học sinh.</p>
                  </div> 
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Landauduocnhattuan8.jpg" alt="Lần đầu được nhất tuần" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Lần đầu tiên lớp được nhận danh hiệu nhất tuần (tuần 2) là một khoảnh khắc đáng nhớ và đầy tự hào đối với cả tập thể. Đó không chỉ là kết quả của những cố gắng trong học tập, nề nếp mà còn là minh chứng cho tinh thần đoàn kết và sự quyết tâm của từng thành viên. Từ những việc nhỏ như giữ gìn vệ sinh, chấp hành nội quy đến việc học tập chăm chỉ, tất cả đều được cả lớp cùng nhau thực hiện nghiêm túc. Khi tên lớp được xướng lên, niềm vui vỡ òa, ai cũng cảm thấy công sức của mình đã được ghi nhận. Thành tích ấy không chỉ mang lại niềm tự hào mà còn trở thành động lực để lớp tiếp tục cố gắng, giữ vững tinh thần và hướng đến những kết quả tốt hơn trong những tuần tiếp theo.</p>
                  </div> 
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Hopphuhuynh8.jpg" alt="Họp phụ huynh giữa kì I" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Buổi họp phụ huynh lớp 8/2 là dịp để gia đình và nhà trường cùng nhìn lại chặng đường học tập, rèn luyện của tập thể lớp. Không khí buổi họp diễn ra trong sự nghiêm túc nhưng cũng rất gần gũi, khi giáo viên chia sẻ về tình hình học tập, nề nếp và những tiến bộ của học sinh. Qua đó, phụ huynh hiểu rõ hơn về quá trình cố gắng của con em mình cũng như những điểm cần cải thiện. Đây không chỉ là cuộc trao đổi thông tin mà còn thể hiện sự đồng hành giữa gia đình và nhà trường trong việc giáo dục học sinh. Chính sự phối hợp ấy đã góp phần tạo nên một tập thể 8/2 ngày càng đoàn kết, chăm ngoan và phát triển toàn diện.</p>
                  </div> 
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <img src="/Nhungcauchuyenhai8.jpg" alt="Những câu chuyện hài" />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Buổi diễn với những câu chuyện hài đã mang đến cho lớp 8/2 một không khí vô cùng sôi động và đầy tiếng cười. Các tiết mục được chuẩn bị công phu bởi các tổ, từ nội dung dí dỏm đến cách thể hiện tự nhiên, khiến ai cũng thích thú và hào hứng theo dõi. Không chỉ đơn thuần là những màn biểu diễn giải trí, đó còn là cơ hội để bọn tôi thể hiện sự sáng tạo, sự tự tin và tinh thần làm việc nhóm. Những tràng cười giòn giã không chỉ xua tan căng thẳng trong học tập mà còn giúp các thành viên trong lớp thêm gần gũi, gắn bó với nhau hơn. Buổi diễn khép lại nhưng dư âm vui vẻ vẫn còn đọng lại, mỗi bạn được cộng thêm 1 điểm, tổ 2 tốt nhất được cộng 2 điểm. Tất cả đã trở thành một kỷ niệm đẹp trong hành trình học tập của tập thể lớp.</p>
                  </div> 
                </div>
                <div className="stories-wrapper-content">
                  <div className="stories-img-wrapper">
                    <br />
                    <video
                      src="/Muahattapthe8.mp4" alt="Múa hát tập thể"
                      controls
                      poster="POSTER_VIDEO_MHTT"
                      muted
                    />
                  </div>
                  <div className="stories-text-wrapper">
                    <br />
                    <p>Buổi tập múa hát tập thể của lớp là khoảng thời gian đầy sôi động và gắn kết. Dù ban đầu còn nhiều bỡ ngỡ, động tác chưa đều hay nhịp chưa khớp, nhưng lớp tôi luôn kiên nhẫn luyện tập, chỉnh sửa từng chút một. Mỗi người đều cố gắng hoàn thành phần của mình, đồng thời hỗ trợ, nhắc nhở nhau để bài biểu diễn trở nên đồng đều và đẹp mắt hơn. Những tiếng cười xen lẫn sự tập trung nghiêm túc đã tạo nên một không khí vừa vui vẻ vừa ý nghĩa. Qua mỗi buổi tập, không chỉ kỹ năng được cải thiện mà tinh thần đoàn kết của lớp cũng ngày càng bền chặt, để rồi khi đứng trên sân khấu, tất cả cùng tự tin thể hiện hết mình và tạo nên một tiết mục đáng nhớ.</p>
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