// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Workflow Progress Indicator
const progressSteps = document.querySelectorAll('.progress-step');
const sections = ['problem', 'solution', 'campaigns', 'your-role'];

// Update progress on scroll
function updateProgress() {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Update active step
                progressSteps.forEach((step, stepIndex) => {
                    step.classList.remove('active');
                    if (stepIndex < index) {
                        step.classList.add('completed');
                    } else if (stepIndex === index) {
                        step.classList.add('active');
                        step.classList.remove('completed');
                    } else {
                        step.classList.remove('completed');
                    }
                });
            }
        }
    });
}

// Click on progress steps to navigate
progressSteps.forEach((step, index) => {
    step.addEventListener('click', () => {
        const targetSection = document.getElementById(sections[index]);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Throttle scroll event for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(updateProgress, 50);
});

// Initial progress update
updateProgress();

// Kurtosis Chart
const ctx = document.getElementById('kurtosisChart');
if (ctx) {
    const kurtosisChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Rất Tệ', 'Tệ', 'Tạm Được', 'Tốt', 'Rất Tốt', 'Tuyệt Vời', 'Hoàn Hảo'],
            datasets: [{
                label: 'Hiện Tại (Phân Phối Rộng)',
                data: [8, 12, 18, 22, 18, 12, 8],
                borderColor: '#E74C3C',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: '#E74C3C',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }, {
                label: 'Mục Tiêu (Phân Phối Tập Trung)',
                data: [2, 5, 20, 40, 20, 5, 2],
                borderColor: '#27AE60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: '#27AE60',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Phân Phối Trải Nghiệm Khách Hàng',
                    font: {
                        size: 20
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 45,
                    title: {
                        display: true,
                        text: '% Khách Hàng'
                    },
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Chất Lượng Trải Nghiệm'
                    }
                }
            }
        }
    });
}

// Modal functionality
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');

function showDetail(type) {
    const details = {
        'product-problem': `
            <div class="modal-header">
                <h2>📸 Vấn Đề Sản Phẩm: Chất Lượng Không Dự Đoán Được</h2>
            </div>
            
            <div class="modal-section">
                <h3>Tình Huống Phòng Lớn</h3>
                <p>Phòng lớn của chúng ta lẽ ra phải là lợi thế - có thể chứa nhóm đông! Nhưng nó lại trở thành điểm yếu lớn nhất.</p>
            </div>
            
            <div class="modal-section">
                <h3>Điều Gì Đang Xảy Ra</h3>
                <div class="problem-grid">
                    <div class="problem-card">
                        <div class="problem-icon">📏</div>
                        <h4>Khoảng Cách Hỗn Loạn</h4>
                        <p>Chênh lệch 1-3 mét</p>
                    </div>
                    <div class="problem-card">
                        <div class="problem-icon">💡</div>
                        <h4>Xổ Số Ánh Sáng</h4>
                        <p>Chất lượng tùy vị trí</p>
                    </div>
                    <div class="problem-card">
                        <div class="problem-icon">🎯</div>
                        <h4>Lấy Nét Thất Bại</h4>
                        <p>Không thể chụp rõ mọi người</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section highlight-section">
                <h3>Phép Tính Tàn Khốc</h3>
                <div class="formula-box">
                    <div class="formula">
                        <span class="good">50% ảnh tuyệt vời</span>
                        <span class="plus">+</span>
                        <span class="bad">50% ảnh tệ hại</span>
                        <span class="equals">=</span>
                        <span class="result">100% không dự đoán được</span>
                    </div>
                    <p class="formula-explanation">Giống như nhà hàng mà một nửa món ăn ngon tuyệt, một nửa không thể ăn được. Bạn có quay lại không?</p>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Tại Sao Điều Này Phá Hủy Kinh Doanh</h3>
                <p class="intro-text">Trong thống kê, đây gọi là <strong>"độ nhọn thấp"</strong> - kết quả phân tán rộng thay vì tập trung.</p>
                
                <div class="consequences-list">
                    <div class="consequence-item">
                        <span class="emoji">😡</span>
                        <div class="content">
                            <h4>Nhà Máy Anti-Fan</h4>
                            <p>Trải nghiệm xấu lan nhanh hơn tốt</p>
                        </div>
                    </div>
                    <div class="consequence-item">
                        <span class="emoji">🎲</span>
                        <div class="content">
                            <h4>Cò Quay Nga</h4>
                            <p>Mỗi khách là một canh bạc</p>
                        </div>
                    </div>
                    <div class="consequence-item">
                        <span class="emoji">❌</span>
                        <div class="content">
                            <h4>Không Tin Cậy</h4>
                            <p>Nhất quán là không thể</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'marketing-problem': `
            <div class="modal-header">
                <h2>📢 Vấn Đề Marketing: Đánh Nhầm Trận</h2>
            </div>
            
            <div class="modal-section">
                <h3>Ba Thất Bại Nghiêm Trọng</h3>
                <p class="intro-text">Chúng ta đang tập trung sai hướng và cạnh tranh nơi không thể thắng.</p>
            </div>
            
            <div class="modal-section">
                <h3>1. Nhầm Lẫn Khách Hàng Mục Tiêu</h3>
                <div class="mismatch-box">
                    <div class="mismatch-item">
                        <span class="icon">👥</span>
                        <div class="content">
                            <strong>Ảnh chúng ta trưng bày</strong>
                            <p>80% cặp đôi</p>
                        </div>
                    </div>
                    <div class="vs">VS</div>
                    <div class="mismatch-item">
                        <span class="icon">🎉</span>
                        <div class="content">
                            <strong>Phòng được thiết kế cho</strong>
                            <p>Nhóm đông!</p>
                        </div>
                    </div>
                </div>
                <div class="result-box error">
                    <p>🤦 <strong>Kết quả:</strong> Marketing sai đối tượng</p>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>2. Cạnh Tranh Nơi Không Thể Thắng</h3>
                <div class="competition-grid">
                    <div class="competition-card lose">
                        <h4>❌ Trận Hiện Tại</h4>
                        <p class="battle-type">Chất Lượng Ảnh</p>
                        <ul>
                            <li>Cạnh tranh công nghệ</li>
                            <li>Chúng ta luôn thua</li>
                        </ul>
                    </div>
                    <div class="competition-card win">
                        <h4>✅ Trận Thắng Được</h4>
                        <p class="battle-type">Trải Nghiệm & Vui Vẻ</p>
                        <ul>
                            <li>Cạnh tranh con người</li>
                            <li>Chúng ta thống trị</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>3. Thất Bại Kênh Phễu Marketing</h3>
                <div class="funnel-visual">
                    <div class="funnel-step success">
                        <h4>Nhận Biết ✓</h4>
                        <p>Họ biết chúng ta tồn tại</p>
                    </div>
                    <div class="funnel-arrow">↓</div>
                    <div class="funnel-step failure">
                        <h4>Cân Nhắc ✗</h4>
                        <p>Không có lý do chọn chúng ta!</p>
                    </div>
                    <div class="funnel-arrow">↓</div>
                    <div class="funnel-step blocked">
                        <h4>Chuyển Đổi ?</h4>
                        <p>Bị chặn bởi cân nhắc yếu</p>
                    </div>
                </div>
                
                <div class="warning-box">
                    <h4>⚠️ Thất Bại Nghiêm Trọng</h4>
                    <p>Chúng ta có <strong>KHÔNG</strong> nội dung cho giai đoạn cân nhắc. Không khác biệt. Không có câu trả lời "tại sao chọn chúng ta?"</p>
                </div>
            </div>
        `,
        'hr-problem': `
            <div class="modal-header">
                <h2>👥 Vấn Đề Nhân Sự: Kho Báu Bị Chôn Vùi</h2>
            </div>
            
            <div class="modal-section">
                <h3>Thuê VĐV Olympic... Rồi Bắt Ngồi Văn Phòng</h3>
                <p class="intro-text">Chúng ta thuê những người tài năng nhưng lại không cho họ tỏa sáng.</p>
            </div>
            
            <div class="modal-section">
                <h3>Sự Khác Biệt Giữa Kỳ Vọng và Thực Tế</h3>
                <div class="expectation-reality">
                    <div class="expectation-box">
                        <h4>🎯 Chúng Ta Thuê Bạn Vì:</h4>
                        <ul class="positive-list">
                            <li>✨ Tính cách ấm áp</li>
                            <li>😄 Sự thân thiện tự nhiên</li>
                            <li>🎉 Khả năng tạo niềm vui</li>
                            <li>💕 Kỹ năng kết nối con người</li>
                        </ul>
                    </div>
                    <div class="reality-box">
                        <h4>😔 Nhưng Bắt Bạn Làm:</h4>
                        <ul class="negative-list">
                            <li>🔘 Bấm nút</li>
                            <li>🤖 Làm theo kịch bản</li>
                            <li>📷 Chụp ảnh</li>
                            <li>🧾 Trở nên vô hình</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Điều Này Khiến Bạn Cảm Thấy</h3>
                <div class="feelings-grid">
                    <div class="feeling-card">
                        <span class="feeling-emoji">😐</span>
                        <h4>"Chỉ Là Người Bấm Nút"</h4>
                        <p>Kỹ năng mình không quan trọng</p>
                    </div>
                    <div class="feeling-card">
                        <span class="feeling-emoji">😕</span>
                        <h4>"Tính Cách Không Liên Quan"</h4>
                        <p>Robot cũng làm được việc này</p>
                    </div>
                    <div class="feeling-card">
                        <span class="feeling-emoji">🤷</span>
                        <h4>"Không Tác Động"</h4>
                        <p>Mình giúp thành công thế nào?</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section highlight-section">
                <h3>Sự Thật Được Giấu Kín</h3>
                <div class="truth-box">
                    <h4>💡 Sự Thân Thiện Của Bạn = Lợi Thế Cạnh Tranh DUY NHẤT Bền Vững</h4>
                    
                    <div class="copyable-grid">
                        <div class="can-copy">
                            <h5>Đối thủ có thể sao chép:</h5>
                            <ul>
                                <li>✅ Thiết bị</li>
                                <li>✅ Giá cả</li>
                                <li>✅ Chiến dịch</li>
                            </ul>
                        </div>
                        <div class="cannot-copy">
                            <h5>Họ KHÔNG THỂ sao chép:</h5>
                            <ul>
                                <li>❌ Nụ cười chân thành</li>
                                <li>❌ Tinh thần vui vẻ</li>
                                <li>❌ CHÍNH BẠN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    };
    
    modalBody.innerHTML = details[type] || '<p>Không tìm thấy chi tiết</p>';
    modal.style.display = 'block';
    
    // Scroll modal to top after content is loaded
    setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 10);
}

function expandCampaign(campaign) {
    const campaigns = {
        'fwb': `
            <div class="modal-header">
                <h2>🎯 Chiến Dịch FWB (Bạn Của Phòng Chụp)</h2>
                <p class="modal-subtitle">Biến khoảnh khắc hỗn loạn thành trải nghiệm viral không thể quên</p>
            </div>
            
            <div class="modal-section">
                <h3>📖 Tổng Quan Chiến Dịch</h3>
                <div class="campaign-overview">
                    <div class="overview-item">
                        <strong>Mục tiêu:</strong> Biến điểm yếu phòng lớn thành lợi thế độc đáo
                    </div>
                    <div class="overview-item">
                        <strong>Đối tượng:</strong> Nhóm bạn 4+ người vui vẻ, năng động
                    </div>
                    <div class="overview-item">
                        <strong>Tần suất:</strong> 3-5 lần mỗi ca làm việc
                    </div>
                    <div class="overview-item">
                        <strong>ROI dự kiến:</strong> 1 shot miễn phí = 5-10 bài đăng mạng xã hội
                    </div>
                </div>
            </div>
            
            <div class="modal-section highlight-section">
                <h3>🎬 Kịch Bản Chi Tiết</h3>
                <div class="scenario-timeline">
                    <div class="scenario-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Quan sát & Nhận diện</h4>
                            <p>Tìm nhóm 4+ người có năng lượng tích cực, đang vui vẻ cùng nhau</p>
                        </div>
                    </div>
                    <div class="scenario-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Tiếp cận tự nhiên</h4>
                            <p>"Ủa, mấy bạn đông vui ghê! Chụp chung hết luôn hả?"</p>
                        </div>
                    </div>
                    <div class="scenario-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Tạo bất ngờ</h4>
                            <p>"Thực ra không được miễn phí đâu... nhưng mấy bạn dễ thương quá!"</p>
                        </div>
                    </div>
                    <div class="scenario-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>Đưa ra thử thách</h4>
                            <p>"Mình tặng một shot miễn phí nha. Xem mấy bạn nhét được bao nhiêu người!"</p>
                        </div>
                    </div>
                    <div class="scenario-step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h4>Tham gia niềm vui</h4>
                            <p>Cổ vũ, đếm số, chụp hình hậu trường, chia sẻ niềm vui</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>💡 Ba Tác Động Đồng Thời</h3>
                <div class="triple-impact-detailed">
                    <div class="impact-detail-card">
                        <div class="impact-header product-bg">
                            <span class="impact-icon">📸</span>
                            <h4>Tác Động Sản Phẩm</h4>
                        </div>
                        <div class="impact-content">
                            <div class="before-after">
                                <div class="before">
                                    <strong>Trước:</strong>
                                    <p>"Làm sao xếp cho vừa?"</p>
                                    <p>"Ai đứng đâu đây?"</p>
                                    <p>Stress về khoảng cách</p>
                                </div>
                                <div class="arrow">→</div>
                                <div class="after">
                                    <strong>Sau:</strong>
                                    <p>"Nhét thêm được không?"</p>
                                    <p>"Thử xem nào!"</p>
                                    <p>Vui vẻ với thử thách</p>
                                </div>
                            </div>
                            <p class="impact-result">✨ Kết quả: Biến lỗi thành tính năng độc đáo</p>
                        </div>
                    </div>
                    
                    <div class="impact-detail-card">
                        <div class="impact-header marketing-bg">
                            <span class="impact-icon">📢</span>
                            <h4>Tác Động Marketing</h4>
                        </div>
                        <div class="impact-content">
                            <ul class="impact-list">
                                <li>📱 Story Instagram: "Thử thách nhét người"</li>
                                <li>🎥 Video TikTok: Behind the scenes vui nhộn</li>
                                <li>💬 Caption sẵn: "Kỷ lục mới tại @Cameraon"</li>
                                <li>🏷️ Hashtag tự động: #CameraonChallenge</li>
                            </ul>
                            <p class="impact-result">✨ Kết quả: Content viral organic không tốn tiền quảng cáo</p>
                        </div>
                    </div>
                    
                    <div class="impact-detail-card">
                        <div class="impact-header hr-bg">
                            <span class="impact-icon">💕</span>
                            <h4>Tác Động Nhân Sự</h4>
                        </div>
                        <div class="impact-content">
                            <div class="employee-transform">
                                <p><strong>Bạn trở thành:</strong></p>
                                <ul>
                                    <li>✓ Người tạo niềm vui, không phải người bấm máy</li>
                                    <li>✓ Người phá luật vì khách hàng</li>
                                    <li>✓ Người được nhớ đến và cảm ơn</li>
                                    <li>✓ Influencer mini với quyền lực tặng quà</li>
                                </ul>
                            </div>
                            <p class="impact-result">✨ Kết quả: Tự hào về công việc, được khách yêu mến</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>📊 Chỉ Số Thành Công</h3>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-icon">📈</div>
                        <h4>Tăng trưởng Viral</h4>
                        <p class="metric-value">300%</p>
                        <p class="metric-desc">Lượt chia sẻ mạng xã hội</p>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">😊</div>
                        <h4>Hài lòng khách hàng</h4>
                        <p class="metric-value">95%</p>
                        <p class="metric-desc">Đánh giá 5 sao cho trải nghiệm</p>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">🔄</div>
                        <h4>Tỷ lệ quay lại</h4>
                        <p class="metric-value">75%</p>
                        <p class="metric-desc">Khách đưa bạn mới đến</p>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">💰</div>
                        <h4>Chi phí/Khách mới</h4>
                        <p class="metric-value">15k</p>
                        <p class="metric-desc">So với 150k quảng cáo FB</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section highlight-section">
                <h3>🎯 Hướng Dẫn Thực Hiện</h3>
                <div class="implementation-guide">
                    <div class="guide-section">
                        <h4>📋 Chuẩn bị</h4>
                        <ul>
                            <li>Luôn có sẵn 5-10 shot miễn phí mỗi ca</li>
                            <li>Chuẩn bị props vui nhộn (kính râm, băng đô...)</li>
                            <li>Sạc đầy pin điện thoại để quay hậu trường</li>
                        </ul>
                    </div>
                    <div class="guide-section">
                        <h4>⚡ Thực hiện</h4>
                        <ul>
                            <li>Timing quan trọng: Chọn lúc khách đang vui</li>
                            <li>Năng lượng: Phải vui và phấn khích như họ</li>
                            <li>Flexibility: Sẵn sàng chơi cùng, không cứng nhắc</li>
                        </ul>
                    </div>
                    <div class="guide-section">
                        <h4>📸 Follow-up</h4>
                        <ul>
                            <li>Tag họ trên story của Cameraon</li>
                            <li>Gửi ảnh hậu trường cho họ</li>
                            <li>Mời tham gia thử thách lần sau với nhóm lớn hơn</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>💬 Câu Chuyện Thành Công</h3>
                <div class="success-story">
                    <blockquote>
                        "Tuần trước có nhóm 8 người, mình thách họ nhét 10 người. Họ gọi thêm 2 bạn từ quán cà phê bên cạnh! 
                        Video của họ được 50k views trên TikTok, và tuần này họ quay lại với 15 người. 
                        Giờ mọi người gọi chúng tôi là 'Phòng chụp thử thách' 😄"
                    </blockquote>
                    <cite>- Linh, nhân viên Cameraon chi nhánh Q1</cite>
                </div>
            </div>
        `,
        'coin': window.coinCampaignEnhanced || `<p>Đang tải nội dung...</p>`,
        'link': window.linkCampaignEnhanced || `<p>Đang tải nội dung...</p>`,
        'voice': window.voiceCampaignEnhanced || `<p>Đang tải nội dung...</p>`
    };
    
    modalBody.innerHTML = campaigns[campaign] || '<p>Không tìm thấy chi tiết chiến dịch</p>';
    modal.style.display = 'block';
    
    // Scroll modal to top after content is loaded
    setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 10);
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Show commitment
function showCommitment() {
    modalBody.innerHTML = `
        <h2>Cam Kết Của Bạn</h2>
        
        <h3>Khi nhấn nút đó, bạn đang nói:</h3>
        
        <div style="background: #FFF3E0; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
            <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">
                "Tôi hiểu rằng TÔI CHÍNH LÀ sản phẩm.<br>
                Không phải máy ảnh. Không phải bản in. CHÍNH LÀ TÔI."
            </p>
            
            <p style="font-size: 1.1rem; margin-bottom: 1rem;">
                "Mỗi ngày, tôi sẽ tự hỏi:<br>
                'Hôm nay mình đã tạo được fan của chính mình chưa?'"
            </p>
            
            <p style="font-size: 1.1rem;">
                "Tôi sẽ dùng sự thân thiện của mình<br>
                để tạo niềm vui nhất quán cho mọi khách hàng."
            </p>
        </div>
        
        <h3>Điều gì xảy ra tiếp theo:</h3>
        <ul>
            <li><strong>Tuần 1:</strong> Đào tạo về tất cả chiến dịch và kịch bản</li>
            <li><strong>Tuần 2:</strong> Thực hành với khách quen</li>
            <li><strong>Tuần 3:</strong> Triển khai đầy đủ</li>
            <li><strong>Tuần 4:</strong> Ăn mừng thành công đầu tiên</li>
        </ul>
        
        <h3>Hãy nhớ:</h3>
        <p>Sự chuyển đổi này chỉ thành công nhờ BẠN. Bạn không đang theo một chiến lược công ty. Bạn đang giải phóng con người thật của mình - một người thân thiện, vui vẻ, khiến người khác cảm thấy đặc biệt.</p>
        
        <p style="text-align: center; font-size: 1.2rem; font-weight: bold; margin-top: 2rem;">
            Chào mừng đến với Cameraon mới.<br>
            Nơi Bạn là lý do mọi người quay lại.
        </p>
    `;
    modal.style.display = 'block';
    
    // Scroll modal to top after content is loaded
    setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 10);
}

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});