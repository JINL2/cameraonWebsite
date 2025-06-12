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

// Kurtosis Chart
const ctx = document.getElementById('kurtosisChart');
if (ctx) {
    const kurtosisChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Very Bad', 'Bad', 'Okay', 'Good', 'Very Good', 'Amazing', 'Perfect'],
            datasets: [{
                label: 'Current Situation (Low Kurtosis)',
                data: [15, 10, 5, 5, 5, 10, 15],
                borderColor: '#FF6B6B',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                tension: 0.4,
                borderWidth: 3
            }, {
                label: 'Our Goal (High Kurtosis)',
                data: [2, 5, 20, 40, 20, 5, 2],
                borderColor: '#2ECC71',
                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                tension: 0.4,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Experience Distribution',
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
                    title: {
                        display: true,
                        text: '% of Customers'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Experience Quality'
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
            <h2>📸 Product Problem: Unpredictable Quality</h2>
            
            <h3>The Big Room Dilemma</h3>
            <p>Our large room was meant to be an advantage - we can accommodate big groups! But it's become our biggest weakness.</p>
            
            <div class="visual-break">• • •</div>
            
            <h3>What's Actually Happening</h3>
            <div class="impact-grid">
                <div class="impact-item">
                    <h5>📏 Distance Chaos</h5>
                    <p>1-3 meters variation</p>
                </div>
                <div class="impact-item">
                    <h5>💡 Lighting Lottery</h5>
                    <p>Quality depends on position</p>
                </div>
                <div class="impact-item">
                    <h5>🎯 Focus Failure</h5>
                    <p>Can't capture everyone clearly</p>
                </div>
            </div>
            
            <div class="highlight-box">
                <h4>The Brutal Math:</h4>
                <p><strong>50% great photos + 50% terrible photos = 100% unpredictable</strong></p>
                <p>It's like a restaurant where half the meals are amazing and half are inedible. Would you go back?</p>
            </div>
            
            <h3>Why This Destroys Our Business</h3>
            <p>In statistics, this is called <strong>"low kurtosis"</strong> - outcomes spread widely instead of concentrated.</p>
            
            <div class="impact-grid">
                <div class="impact-item">
                    <h5>😡 Anti-Fan Factory</h5>
                    <p>Bad experiences spread faster than good ones</p>
                </div>
                <div class="impact-item">
                    <h5>🎲 Russian Roulette</h5>
                    <p>Every customer is a gamble</p>
                </div>
                <div class="impact-item">
                    <h5>❌ Zero Trust</h5>
                    <p>Consistency is impossible</p>
                </div>
            </div>
        `,
        'marketing-problem': `
            <h2>📢 Marketing Problem: Fighting the Wrong Battle</h2>
            
            <h3>Three Critical Failures</h3>
            
            <div class="visual-break">• • •</div>
            
            <h3>1. Target Customer Confusion</h3>
            <div class="highlight-box">
                <p>👥 <strong>Our photos show:</strong> 80% couples</p>
                <p>🎉 <strong>Our room is built for:</strong> Big groups!</p>
                <p>🤦 <strong>Result:</strong> Marketing to wrong audience</p>
            </div>
            
            <h3>2. Competing Where We Can't Win</h3>
            <div class="impact-grid">
                <div class="impact-item" style="background: #fee;">
                    <h5>❌ Current Battle</h5>
                    <p><strong>Photo Quality</strong><br>Technology competition<br>We always lose</p>
                </div>
                <div class="impact-item" style="background: #efe;">
                    <h5>✅ Winning Battle</h5>
                    <p><strong>Experience & Fun</strong><br>Human competition<br>We can dominate</p>
                </div>
            </div>
            
            <h3>3. The Funnel Failure</h3>
            <div style="text-align: center; margin: 2rem 0;">
                <div style="display: inline-block; padding: 1rem 2rem; margin: 0.5rem; background: #d4edda; border-radius: 10px;">
                    <strong>Awareness ✓</strong><br>They know we exist
                </div>
                <div style="font-size: 2rem; color: #999;">↓</div>
                <div style="display: inline-block; padding: 1rem 2rem; margin: 0.5rem; background: #f8d7da; border-radius: 10px; border: 3px solid #f5c6cb;">
                    <strong>Consideration ✗</strong><br>No reason to choose us!
                </div>
                <div style="font-size: 2rem; color: #999;">↓</div>
                <div style="display: inline-block; padding: 1rem 2rem; margin: 0.5rem; background: #e2e3e5; border-radius: 10px;">
                    <strong>Conversion ?</strong><br>Blocked by weak consideration
                </div>
            </div>
            
            <div class="highlight-box" style="background: #fff3cd; border-color: #ffc107;">
                <h4>⚠️ Critical Failure</h4>
                <p>We have <strong>ZERO</strong> content for consideration stage. No differentiation. No "why us?" answer.</p>
            </div>
        `,
        'hr-problem': `
            <h2>👥 HR Problem: Hidden Treasure</h2>
            
            <h3>We Hired Olympic Athletes... Then Made Them Sit at a Desk</h3>
            
            <div class="visual-break">• • •</div>
            
            <div class="highlight-box" style="background: #e8f5e9; border-color: #4caf50;">
                <h4>🎯 What We Hired You For:</h4>
                <p>✨ Warm personalities<br>
                😄 Natural friendliness<br>
                🎉 Ability to create joy<br>
                💕 Human connection skills</p>
            </div>
            
            <div class="highlight-box" style="background: #ffebee; border-color: #f44336;">
                <h4>😔 What We Made You Do:</h4>
                <p>🔘 Press buttons<br>
                🤖 Follow scripts<br>
                📷 Take photos<br>
                🧾 Be invisible</p>
            </div>
            
            <h3>How This Makes You Feel</h3>
            <div class="impact-grid">
                <div class="impact-item">
                    <h5>😐 "Just a Button Pusher"</h5>
                    <p>My skills don't matter</p>
                </div>
                <div class="impact-item">
                    <h5>😕 "Personality Irrelevant"</h5>
                    <p>Robot could do this job</p>
                </div>
                <div class="impact-item">
                    <h5>🤷 "No Impact"</h5>
                    <p>How do I help success?</p>
                </div>
            </div>
            
            <div class="visual-break">• • •</div>
            
            <h3>The Hidden Truth</h3>
            <div class="highlight-box" style="background: #f3e5f5; border-color: #9c27b0;">
                <h4>💡 Your Friendliness = Our ONLY Sustainable Advantage</h4>
                <p style="font-size: 1.1rem; text-align: center; margin-top: 1rem;">
                    Competitors can copy: <br>
                    ✅ Our equipment ✅ Our prices ✅ Our campaigns<br><br>
                    They CANNOT copy: <br>
                    ❌ Your genuine smile ❌ Your playful spirit ❌ YOU
                </p>
            </div>
        `
    };
    
    modalBody.innerHTML = details[type] || '<p>Details not found</p>';
    modal.style.display = 'block';
}

function expandCampaign(campaign) {
    const campaigns = {
        'fwb': `
            <h2>🎯 FWB (Friend With Booth) Campaign</h2>
            <p style="font-size: 1.2rem; color: #666;">Transform chaos into viral fun</p>
            
            <h3>The Magic Script</h3>
            <div class="script-box">
                "Actually, this isn't supposed to be free...<br>
                but you guys look so friendly!<br>
                I'll give you one free shot.<br>
                Let's see how many of you can fit!"
            </div>
            
            <h3>Triple Impact in Action</h3>
            <div class="impact-grid">
                <div class="impact-item">
                    <h5>📸 Product Fix</h5>
                    <p>"Where to stand?" anxiety<br>↓<br>"How many can fit?" fun</p>
                </div>
                <div class="impact-item">
                    <h5>📢 Marketing Win</h5>
                    <p>Dead social media<br>↓<br>Viral challenge content</p>
                </div>
                <div class="impact-item">
                    <h5>💕 HR Magic</h5>
                    <p>Silent staff<br>↓<br>Rule-breaking hero</p>
                </div>
            </div>
            
            <div class="visual-break">• • •</div>
            
            <h3>Why Customers Love This</h3>
            <div class="highlight-box">
                <p>🎉 <strong>Surprise factor:</strong> "They gave us free stuff!"</p>
                <p>😄 <strong>Fun challenge:</strong> "Can we beat the record?"</p>
                <p>📱 <strong>Share-worthy:</strong> "Look how many we fit!"</p>
                <p>❤️ <strong>Personal touch:</strong> "That person was so nice!"</p>
            </div>
            
            <h3>Pro Execution Tips</h3>
            <div class="impact-grid">
                <div class="impact-item">
                    <h5>👀 Spot the Target</h5>
                    <p>Groups of 4+ friends</p>
                </div>
                <div class="impact-item">
                    <h5>🎭 Feel Natural</h5>
                    <p>Spontaneous, not scripted</p>
                </div>
                <div class="impact-item">
                    <h5>🎆 Join the Fun</h5>
                    <p>Their excitement = yours</p>
                </div>
            </div>
        `,
        'coin': `
            <h2>Coin Game System</h2>
            
            <h3>The Setup</h3>
            <p>Every customer gets 3 free coins for the gachapon/claw machine after their photo.</p>
            <p>But here's the magic...</p>
            
            <h3>The 4th Coin Moment</h3>
            <div style="background: #f0fff0; padding: 1.5rem; border-radius: 5px; margin: 1rem 0;">
                <p><strong>Customer:</strong> "Can we get one more coin?"</p>
                <p><strong>You:</strong> "Hmm... okay, but you have to win it! Rock, paper, scissors?"</p>
            </div>
            
            <h3>Why This Is Genius</h3>
            <h4>1. Product Impact</h4>
            <ul>
                <li>Adds value beyond just photos</li>
                <li>Creates multiple happy moments</li>
                <li>Even if photos aren't perfect, they had fun</li>
            </ul>
            
            <h4>2. Marketing Impact</h4>
            <ul>
                <li>5-minute visit becomes 15-minute experience</li>
                <li>More time = more emotional connection</li>
                <li>Stories to tell: "The staff played games with us!"</li>
            </ul>
            
            <h4>3. HR Impact</h4>
            <ul>
                <li>You become playmate, not servant</li>
                <li>Natural conversation starter</li>
                <li>Win or lose, everyone smiles</li>
                <li>Shows your playful personality</li>
            </ul>
            
            <h3>Pro Tips</h3>
            <ul>
                <li>Make a big deal when they win</li>
                <li>If they lose, sometimes "accidentally" drop an extra coin</li>
                <li>Challenge them to best 2 out of 3</li>
                <li>Get their friends to cheer</li>
            </ul>
        `,
        'link': `
            <h2>Link Your Friendship Campaign</h2>
            
            <h3>The Surprise Element</h3>
            <p>Groups of 6+ get mini photos (100x100px) for phone decorations - but they don't know this!</p>
            
            <h3>The Reveal</h3>
            <div style="background: #fff0f5; padding: 1.5rem; border-radius: 5px; margin: 1rem 0;">
                <p><strong>After printing main photo:</strong></p>
                <p>"Oh wait! Since you brought so many friends, I have something special for you..."</p>
                <p>*Hand out mini photos*</p>
                <p>"One for each of you to put on your phone!"</p>
            </div>
            
            <h3>The Mathematics of Virality</h3>
            <ul>
                <li>1 photo session → 6 mini photos</li>
                <li>6 phones → Seen 50+ times per day each</li>
                <li>300+ daily brand impressions</li>
                <li>Countless "Where did you get that?" conversations</li>
            </ul>
            
            <h3>Why It's Triple Impact</h3>
            <h4>1. Product</h4>
            <ul>
                <li>Uses extra printer capacity efficiently</li>
                <li>Incentivizes larger groups</li>
                <li>Adds tangible value</li>
            </ul>
            
            <h4>2. Marketing</h4>
            <ul>
                <li>Walking advertisements everywhere</li>
                <li>Reinforces "group friendly" positioning</li>
                <li>Natural conversation starters</li>
            </ul>
            
            <h4>3. HR</h4>
            <ul>
                <li>You create surprise delight moment</li>
                <li>Personal handoff creates connection</li>
                <li>"That sweet person gave us gifts!"</li>
            </ul>
        `,
        'voice': `
            <h2>Listen Your Voice Campaign</h2>
            
            <h3>The Setup</h3>
            <p>Exit poster asks for feedback with 20,000 won voucher reward. But it's more than feedback...</p>
            
            <h3>Why 20,000 Won Matters</h3>
            <div style="background: #f5f5ff; padding: 1.5rem; border-radius: 5px; margin: 1rem 0;">
                <p>This isn't a discount. It's a statement:</p>
                <p><strong>"Your opinion is worth 20,000 won to us."</strong></p>
                <p>High value = serious intent = real change</p>
            </div>
            
            <h3>The Cycle of Improvement</h3>
            <ol>
                <li><strong>Customer shares problem</strong> (3 days to discover vs 3 months)</li>
                <li><strong>We fix it immediately</strong></li>
                <li><strong>Share the story:</strong> "You said the music was too loud. We fixed it!"</li>
                <li><strong>Customer returns with voucher</strong> - sees the change</li>
                <li><strong>Becomes advocate:</strong> "They actually listen!"</li>
            </ol>
            
            <h3>Triple Impact Magic</h3>
            <h4>1. Product</h4>
            <ul>
                <li>Rapid problem identification</li>
                <li>Direct executive visibility</li>
                <li>Continuous improvement</li>
            </ul>
            
            <h4>2. Marketing</h4>
            <ul>
                <li>Endless "we care" content</li>
                <li>Real stories, not manufactured</li>
                <li>Trust-building narratives</li>
            </ul>
            
            <h4>3. HR</h4>
            <ul>
                <li>Staff sees changes happen</li>
                <li>Direct line to management</li>
                <li>"My company actually cares"</li>
                <li>Pride in improvements</li>
            </ul>
        `
    };
    
    modalBody.innerHTML = campaigns[campaign] || '<p>Campaign details not found</p>';
    modal.style.display = 'block';
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
        <h2>Your Commitment</h2>
        
        <h3>By clicking that button, you're saying:</h3>
        
        <div style="background: #f0f8ff; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
            <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">
                "I understand that I AM the product.<br>
                Not the camera. Not the prints. ME."
            </p>
            
            <p style="font-size: 1.1rem; margin-bottom: 1rem;">
                "Every day, I will ask myself:<br>
                'Did I make a fan of myself today?'"
            </p>
            
            <p style="font-size: 1.1rem;">
                "I will use my friendliness to create<br>
                consistent joy for every customer."
            </p>
        </div>
        
        <h3>What happens next:</h3>
        <ul>
            <li><strong>Week 1:</strong> Training on all campaigns and scripts</li>
            <li><strong>Week 2:</strong> Practice with friendly customers</li>
            <li><strong>Week 3:</strong> Full implementation</li>
            <li><strong>Week 4:</strong> Celebrate first successes</li>
        </ul>
        
        <h3>Remember:</h3>
        <p>This transformation only works because of YOU. You're not following a corporate strategy. You're unleashing who you already are - a friendly, playful person who makes others feel special.</p>
        
        <p style="text-align: center; font-size: 1.2rem; font-weight: bold; margin-top: 2rem;">
            Welcome to the new Cameraon.<br>
            Where YOU are the reason people come back.
        </p>
    `;
    modal.style.display = 'block';
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