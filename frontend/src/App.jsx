import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Confetti from 'react-confetti'



function Home() {
  return (
    <>
      <div className="hero">
        <h1>Welcome to the Green Economy AI Platform 🌱</h1>
        <p>
          Empowering learners to understand and take action on renewable energy, sustainability, and climate change.
        </p>
        <a href="/lessons" style={{ textDecoration: 'none' }}>
          <button className="cta-btn">Start Learning Now</button>
        </a>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#fffbe6"/>
          </svg>
        </div>
      </div>
      <div className="card">
        <h1>Welcome to the Green Economy AI Platform 🌱</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>
          Empowering learners to understand and take action on renewable energy, sustainability, and climate change.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3>🌞 Learn About Renewable Energy</h3>
            <p>Explore solar, wind, hydro, and more. Discover how clean energy powers a sustainable future.</p>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3>🌍 Sustainability Matters</h3>
            <p>Understand how our choices impact the planet and how you can make a difference every day.</p>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3>🤖 AI Chatbot</h3>
            <p>Ask questions and get instant, friendly answers about climate, energy, and sustainability topics.</p>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3>📝 Interactive Quizzes</h3>
            <p>Test your knowledge and challenge yourself with fun, educational quizzes.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <a href="/lessons" style={{ textDecoration: 'none' }}>
            <button style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', marginTop: '1rem' }}>
              Start Learning Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

function Profile({ completed, total }) {
  return (
    <div style={{ position: 'absolute', top: 18, right: 32, background: '#fffbe6', borderRadius: 12, padding: '0.7rem 1.5rem', boxShadow: '0 2px 8px #43cea233', fontWeight: 600, color: '#2e7d32', fontSize: '1.1rem' }}>
      <span>👤 Lessons Completed: {completed} / {total}</span>
    </div>
  );
}

function InfoBox({ children }) {
  return (
    <div className="info-box">{children}</div>
  );
}

function ExpandableTip({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ margin: '1rem 0' }}>
      <button style={{ background: '#43cea2', color: '#fff', fontWeight: 600, border: 'none', borderRadius: 6, padding: '0.3rem 1rem', cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
        {open ? 'Hide Tip' : title}
      </button>
      {open && <div style={{ background: '#fffbe6', borderRadius: 8, padding: '0.7rem', marginTop: 6 }}>{children}</div>}
    </div>
  );
}

function QuickCheck({ question, options, answer }) {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleCheck = () => {
    setShow(true);
    setFailed(selected !== answer);
  };
  const handleRetry = () => {
    setSelected(null);
    setShow(false);
    setFailed(false);
  };
  return (
    <div className="quick-check">
      <b>Quick Check:</b> {question}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((opt, i) => (
          <li key={i}>
            <label style={{ cursor: 'pointer' }}>
              <input type="radio" name={question} checked={selected === i} onChange={() => setSelected(i)} disabled={show} /> {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleCheck} disabled={selected === null || show}>Check</button>
      {show && (
        <div className={`quick-check-feedback${selected === answer ? ' correct' : ' incorrect'}`}>
          {selected === answer ? 'Correct! 🎉' : 'Not quite. Try reviewing the lesson!'}
          {failed && (
            <button className="quick-check-retry" onClick={handleRetry}>Retry</button>
          )}
        </div>
      )}
    </div>
  );
}

const LESSONS = [
  {
    id: 1,
    title: "Introduction to Renewable Energy",
    description: "Learn what renewable energy is, why it matters, and how it helps the planet.",
    content: (
      <>
        <h3>What is Renewable Energy?</h3>
        <p>Renewable energy comes from natural sources that are constantly replenished, such as sunlight, wind, and water. Unlike fossil fuels that take millions of years to form, renewable energy sources are naturally renewed and will never run out.</p>
        
        <h4>Types of Renewable Energy</h4>
        <ul>
          <li><b>Solar Energy:</b> Energy from the sun, captured by solar panels and used to power homes, schools, and businesses. Solar panels convert sunlight directly into electricity.</li>
          <li><b>Wind Energy:</b> Energy from moving air, harnessed by wind turbines to generate electricity. Wind farms can power entire communities.</li>
          <li><b>Hydroelectric Energy:</b> Energy from flowing water, often produced by dams and used to power entire cities. It's one of the oldest forms of renewable energy.</li>
          <li><b>Biomass Energy:</b> Energy from plants and organic material, such as wood, crops, or even waste. This includes biofuels like ethanol and biodiesel.</li>
          <li><b>Geothermal Energy:</b> Heat from within the Earth, used to generate electricity or heat buildings directly.</li>
        </ul>
        
        <InfoBox>
          <strong>Did you know?</strong> Renewable energy is clean, safe, and available everywhere on Earth! The sun provides enough energy in one hour to power the entire world for a year.
        </InfoBox>
        
        <h4>Why Choose Renewable Energy?</h4>
        <ul>
          <li><b>Environmental Benefits:</b> It reduces air and water pollution, helping to protect our planet's ecosystems.</li>
          <li><b>Climate Action:</b> It helps slow down global warming by reducing greenhouse gas emissions.</li>
          <li><b>Economic Benefits:</b> It creates new jobs in green industries and reduces energy costs over time.</li>
          <li><b>Sustainability:</b> It is sustainable and will not run out, unlike fossil fuels.</li>
          <li><b>Energy Independence:</b> Countries can produce their own energy instead of relying on imported fossil fuels.</li>
        </ul>
        
        <ExpandableTip title="Amazing Solar Fact!">
          <div className="fact-tip-content">The world's largest solar power plant is in India and can power over 150,000 homes! Solar energy is the fastest-growing renewable energy source in the world.</div>
        </ExpandableTip>
        
        <h4>Real-World Success Stories</h4>
        <ul>
          <li><b>Denmark:</b> Generates over 50% of its electricity from wind power and aims to be 100% renewable by 2050.</li>
          <li><b>Costa Rica:</b> Runs almost entirely on renewable energy, primarily hydroelectric and geothermal power.</li>
          <li><b>Iceland:</b> Uses geothermal energy to heat 90% of its homes and generate 25% of its electricity.</li>
        </ul>
        
        <h4>How Solar Panels Work</h4>
        <p>Solar panels contain photovoltaic cells that convert sunlight into electricity. When sunlight hits these cells, it creates an electric field that causes electricity to flow. This process is called the photovoltaic effect.</p>
        
        <h4>Wind Turbine Technology</h4>
        <p>Wind turbines work like giant fans in reverse. Instead of using electricity to make wind, they use wind to make electricity. The wind turns the blades, which spin a generator to create electricity.</p>
        
        <QuickCheck
          question="Which of these is a renewable energy source?"
          options={["Coal", "Wind", "Oil", "Natural Gas"]}
          answer={1}
        />
        
        <QuickCheck
          question="What percentage of the world's energy currently comes from renewable sources?"
          options={["About 5%", "About 15%", "About 30%", "About 50%"]}
          answer={1}
        />
      </>
    )
  },
  {
    id: 2,
    title: "Sustainability and You",
    description: "Discover what sustainability means and how your choices impact the future.",
    content: (
      <>
        <h3>What is Sustainability?</h3>
        <p>Sustainability means meeting our needs without harming the ability of future generations to meet theirs. It's about living in harmony with nature and using resources wisely to ensure they last for generations to come.</p>
        
        <h4>The Three Pillars of Sustainability</h4>
        <ul>
          <li><b>Environmental Sustainability:</b> Protecting natural resources and ecosystems for future generations.</li>
          <li><b>Economic Sustainability:</b> Creating economic systems that can continue indefinitely without depleting resources.</li>
          <li><b>Social Sustainability:</b> Ensuring that all people have access to basic needs and can live healthy, fulfilling lives.</li>
        </ul>
        
        <InfoBox>
          <strong>Every small action counts!</strong> Even turning off the tap while brushing your teeth saves up to 4 gallons of water per day. Multiply that by millions of people, and the impact is enormous!
        </InfoBox>
        
        <h4>Reduce, Reuse, Recycle - The Three R's</h4>
        <ul>
          <li><b>Reduce:</b> Cut down on waste by buying only what you need and choosing products with less packaging.</li>
          <li><b>Reuse:</b> Find new uses for items instead of throwing them away. Get creative with repurposing!</li>
          <li><b>Recycle:</b> Turn used materials into new products. Paper, plastic, glass, and metal can all be recycled.</li>
        </ul>
        
        <h4>Energy Conservation at Home</h4>
        <ul>
          <li>Turn off lights when leaving a room</li>
          <li>Unplug electronics when not in use (they still use energy when plugged in!)</li>
          <li>Use energy-efficient LED light bulbs</li>
          <li>Set your thermostat a few degrees lower in winter and higher in summer</li>
          <li>Take shorter showers to save water and energy</li>
        </ul>
        
        <h4>Water Conservation</h4>
        <ul>
          <li>Fix leaky faucets and pipes</li>
          <li>Install low-flow showerheads and toilets</li>
          <li>Collect rainwater for watering plants</li>
          <li>Only run dishwashers and washing machines when full</li>
        </ul>
        
        <ExpandableTip title="Why is composting important?">
          Composting turns food scraps into rich soil, reducing landfill waste and helping plants grow. It also reduces methane emissions from landfills, which is a powerful greenhouse gas.
        </ExpandableTip>
        
        <h4>Sustainable Shopping Habits</h4>
        <ul>
          <li>Bring your own reusable bags when shopping</li>
          <li>Choose products with minimal packaging</li>
          <li>Buy local and seasonal foods to reduce transportation emissions</li>
          <li>Support companies that use sustainable practices</li>
          <li>Use a reusable water bottle instead of single-use plastic</li>
        </ul>
        
        <h4>Transportation Choices</h4>
        <ul>
          <li>Walk, bike, or use public transportation when possible</li>
          <li>Carpool with friends or family</li>
          <li>Consider electric or hybrid vehicles</li>
          <li>Plan errands to reduce the number of trips</li>
        </ul>
        
        <h4>Amazing Impact Facts</h4>
        <ul>
          <li>If everyone recycled just one plastic bottle, we could keep billions of bottles out of landfills each year!</li>
          <li>A single tree can absorb up to 48 pounds of carbon dioxide per year.</li>
          <li>Recycling one aluminum can saves enough energy to run a TV for 3 hours.</li>
          <li>Using a reusable water bottle can save 156 plastic bottles per year.</li>
        </ul>
        
        <QuickCheck
          question="Which of these is a sustainable action?"
          options={["Throwing away plastic", "Recycling", "Wasting water", "Using more coal"]}
          answer={1}
        />
        
        <QuickCheck
          question="What is the most important of the three R's?"
          options={["Recycle", "Reuse", "Reduce", "They're all equal"]}
          answer={2}
        />
      </>
    )
  },
  {
    id: 3,
    title: "Climate Action Steps",
    description: "Explore practical steps you can take to fight climate change.",
    content: (
      <>
        <h3>Understanding Climate Change</h3>
        <p>Climate change is one of the biggest challenges facing our planet today. It's caused by the buildup of greenhouse gases in our atmosphere, primarily from burning fossil fuels. The good news is that everyone can take action to help!</p>
        
        <h4>What Causes Climate Change?</h4>
        <ul>
          <li><b>Burning Fossil Fuels:</b> Coal, oil, and natural gas release carbon dioxide when burned</li>
          <li><b>Deforestation:</b> Trees absorb CO2, so cutting them down increases greenhouse gases</li>
          <li><b>Industrial Processes:</b> Manufacturing and other industries release various greenhouse gases</li>
          <li><b>Agriculture:</b> Livestock and certain farming practices release methane and other gases</li>
        </ul>
        
        <InfoBox>
          <strong>Planting trees is one of the easiest and most effective ways to help the environment!</strong> Trees absorb carbon dioxide and release oxygen, making them natural climate fighters.
        </InfoBox>
        
        <h4>Individual Actions You Can Take</h4>
        <ul>
          <li><b>Transportation:</b> Use public transport, bike, or walk instead of driving to reduce carbon emissions</li>
          <li><b>Diet Choices:</b> Eat more plant-based foods, which require less energy and water to produce</li>
          <li><b>Energy Use:</b> Switch to renewable energy sources and use energy-efficient appliances</li>
          <li><b>Waste Reduction:</b> Reduce, reuse, and recycle to save resources and energy</li>
          <li><b>Water Conservation:</b> Use water efficiently to reduce the energy needed to treat and pump water</li>
        </ul>
        
        <h4>Community Involvement</h4>
        <ul>
          <li>Join a local clean-up event or tree-planting day</li>
          <li>Start a school or community garden</li>
          <li>Share what you learn about climate action with friends and family</li>
          <li>Write to local leaders about supporting green policies</li>
          <li>Participate in climate marches and demonstrations</li>
        </ul>
        
        <ExpandableTip title="Inspiring Story: The Green Belt Movement">
          In Kenya, the Green Belt Movement has planted over 51 million trees, empowering communities and restoring nature. Founded by Wangari Maathai, this movement shows how one person's idea can grow into a global movement for change.
        </ExpandableTip>
        
        <h4>Youth Climate Action</h4>
        <p>Young people around the world are leading the fight against climate change! From Greta Thunberg's school strikes to local youth groups, students are making their voices heard and demanding action from leaders.</p>
        
        <h4>Technology and Innovation</h4>
        <ul>
          <li><b>Electric Vehicles:</b> Cars that run on electricity instead of gasoline</li>
          <li><b>Smart Grids:</b> Modern electricity systems that can better handle renewable energy</li>
          <li><b>Carbon Capture:</b> Technology that removes CO2 from the atmosphere</li>
          <li><b>Green Buildings:</b> Buildings designed to use less energy and water</li>
        </ul>
        
        <h4>Global Climate Agreements</h4>
        <p>The Paris Agreement, signed by nearly 200 countries, aims to limit global warming to well below 2°C above pre-industrial levels. Countries are working together to reduce emissions and adapt to climate change.</p>
        
        <h4>Climate Justice</h4>
        <p>Climate change affects everyone, but some communities are more vulnerable than others. Climate justice means ensuring that the people most affected by climate change have a voice in solutions and receive support to adapt.</p>
        
        <h4>Hope for the Future</h4>
        <ul>
          <li>Renewable energy costs are falling rapidly</li>
          <li>More countries are setting ambitious climate goals</li>
          <li>Young people are leading climate action worldwide</li>
          <li>Technology is advancing to help solve climate challenges</li>
        </ul>
        
        <QuickCheck
          question="Which of these helps fight climate change?"
          options={["Using public transport", "Burning more coal", "Wasting food", "Cutting down trees"]}
          answer={0}
        />
        
        <QuickCheck
          question="What is the main greenhouse gas causing climate change?"
          options={["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"]}
          answer={1}
        />
      </>
    )
  },
  {
    id: 4,
    title: "Green Technology and Innovation",
    description: "Explore cutting-edge technologies that are helping to create a sustainable future.",
    content: (
      <>
        <h3>The Future of Green Technology</h3>
        <p>Technology is playing a crucial role in solving environmental challenges. From smart cities to clean energy innovations, new technologies are helping us build a more sustainable world.</p>
        
        <h4>Smart Cities and Buildings</h4>
        <ul>
          <li><b>Smart Grids:</b> Modern electricity systems that can better handle renewable energy and reduce waste</li>
          <li><b>Green Buildings:</b> Buildings designed to use less energy and water, with features like solar panels and green roofs</li>
          <li><b>Smart Transportation:</b> Electric buses, bike-sharing programs, and intelligent traffic systems</li>
          <li><b>IoT Sensors:</b> Connected devices that monitor energy use, air quality, and waste management</li>
        </ul>
        
        <InfoBox>
          <strong>Smart cities can reduce energy consumption by up to 30%!</strong> By using technology to optimize everything from traffic lights to building heating, cities can become much more efficient.
        </InfoBox>
        
        <h4>Clean Energy Innovations</h4>
        <ul>
          <li><b>Advanced Solar Panels:</b> New materials and designs that make solar energy more efficient and affordable</li>
          <li><b>Floating Wind Farms:</b> Wind turbines placed in the ocean where winds are stronger and more consistent</li>
          <li><b>Energy Storage:</b> Better batteries and other storage solutions to save renewable energy for when it's needed</li>
          <li><b>Hydrogen Fuel:</b> Clean fuel that can be used for transportation and industry</li>
        </ul>
        
        <h4>Transportation Revolution</h4>
        <ul>
          <li><b>Electric Vehicles (EVs):</b> Cars, buses, and trucks that run on electricity instead of gasoline</li>
          <li><b>Autonomous Vehicles:</b> Self-driving cars that can reduce traffic and improve efficiency</li>
          <li><b>Hyperloop:</b> High-speed transportation systems that could revolutionize long-distance travel</li>
          <li><b>Electric Aircraft:</b> Planes powered by electricity or hydrogen fuel</li>
        </ul>
        
        <ExpandableTip title="Amazing EV Fact!">
          Electric vehicles produce zero emissions while driving and can be powered by renewable energy. The Tesla Model 3 became the world's best-selling electric car in 2020!
        </ExpandableTip>
        
        <h4>Circular Economy Technologies</h4>
        <ul>
          <li><b>Advanced Recycling:</b> New methods to recycle materials that were previously difficult to process</li>
          <li><b>Biodegradable Materials:</b> Plastics and other materials that break down naturally in the environment</li>
          <li><b>3D Printing:</b> Manufacturing that reduces waste by building objects layer by layer</li>
          <li><b>Waste-to-Energy:</b> Converting waste into useful energy instead of sending it to landfills</li>
        </ul>
        
        <h4>Artificial Intelligence for Sustainability</h4>
        <ul>
          <li><b>Climate Modeling:</b> AI helps scientists better understand and predict climate change</li>
          <li><b>Energy Optimization:</b> AI systems that automatically adjust energy use for maximum efficiency</li>
          <li><b>Precision Agriculture:</b> Using AI to optimize farming practices and reduce waste</li>
          <li><b>Wildlife Conservation:</b> AI-powered cameras and sensors that help protect endangered species</li>
        </ul>
        
        <h4>Breakthrough Technologies</h4>
        <ul>
          <li><b>Carbon Capture:</b> Technology that removes CO2 from the atmosphere and stores it safely</li>
          <li><b>Nuclear Fusion:</b> A potential future energy source that could provide unlimited clean energy</li>
          <li><b>Quantum Computing:</b> Super-powerful computers that could help solve complex environmental problems</li>
          <li><b>Space-Based Solar:</b> Collecting solar energy in space and beaming it to Earth</li>
        </ul>
        
        <h4>Youth Innovation</h4>
        <p>Young people around the world are creating amazing green technologies! From high school students building solar-powered cars to college students developing new recycling methods, the next generation is leading the way in environmental innovation.</p>
        
        <h4>How You Can Get Involved</h4>
        <ul>
          <li>Learn to code and create apps that promote sustainability</li>
          <li>Join robotics or engineering clubs that focus on green technology</li>
          <li>Participate in science fairs with environmental projects</li>
          <li>Follow green tech news and share what you learn</li>
          <li>Support companies that are developing sustainable technologies</li>
        </ul>
        
        <QuickCheck
          question="Which technology helps cities use energy more efficiently?"
          options={["Smart grids", "Fossil fuels", "Nuclear weapons", "Plastic bags"]}
          answer={0}
        />
        
        <QuickCheck
          question="What is the main advantage of electric vehicles?"
          options={["They're always cheap", "They produce zero emissions while driving", "They never need charging", "They're always fast"]}
          answer={1}
        />
      </>
    )
  }
];

const LESSON_THUMBNAILS = [
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Solar_panels_on_a_roof.jpg", // Renewable Energy
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Plastic_bottles_recycling.jpg", // Sustainability
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=200&q=80", // Climate Action
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=200&q=80" // Green Technology
];

function ProgressBar({ value, max }) {
  const percent = Math.round((value / max) * 100);
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: percent + '%' }}></div>
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div style={{ textAlign: 'center', margin: '2rem auto', opacity: 0.7 }}>
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none"><ellipse cx="60" cy="70" rx="50" ry="8" fill="#b3e6ff"/><circle cx="60" cy="40" r="30" fill="#e0ffe6" stroke="#43cea2" strokeWidth="3"/><text x="60" y="48" textAnchor="middle" fill="#43cea2" fontSize="18" fontWeight="bold">🌱</text></svg>
      <div style={{ marginTop: 12, fontSize: '1.1rem' }}>{text}</div>
    </div>
  );
}

function Lessons({ completedLessons, setCompletedLessons }) {
  const [view, setView] = useState('list');
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef();
  const [ready, setReady] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleStart = (lesson) => {
    setSelected(lesson);
    setView('desc');
  };
  const handleBegin = () => setView('content');
  const handleComplete = () => {
    if (!completedLessons.includes(selected.id)) {
      setCompletedLessons([...completedLessons, selected.id]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    }
    setView('list');
    setSelected(null);
  };

  if (!ready) return (
    <div className="card fadein">
      <h2>All Lessons</h2>
      <label className="ready-checkbox-label">
        <input type="checkbox" className="ready-checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} /> I am ready to view all lessons
      </label>
      <button className="sparkle" disabled={!checked} onClick={() => setReady(true)}>Start</button>
    </div>
  );

  if (view === 'list') {
    return (
      <div className="card fadein">
        <h2>Lessons <span style={{ fontSize: '1.3rem' }}>📚</span></h2>
        <ProgressBar value={completedLessons.length} max={LESSONS.length} />
        <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
          {LESSONS.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            return (
              <li key={lesson.id} style={{ margin: '1.5rem 0', background: isCompleted ? '#d0ffd6' : '#e0ffe6', borderRadius: 12, padding: '1.2rem 1.5rem', boxShadow: '0 2px 8px #43cea233', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.3s' }}>
                <div>
                  <b style={{ fontSize: '1.15rem', color: '#185a9d' }}>{lesson.title} {isCompleted ? '✅' : '🕒'}</b>
                  <div style={{ color: '#2e7d32', fontSize: '1rem', marginTop: 4 }}>{lesson.description}</div>
                </div>
                {isCompleted ? (
                  <button onClick={() => handleStart(lesson)}><span role="img" aria-label="retake">🔄</span> Retake</button>
                ) : (
                  <button onClick={() => handleStart(lesson)}><span role="img" aria-label="start">🚀</span> Start Learning</button>
                )}
              </li>
            );
          })}
        </ul>
        {completedLessons.length === 0 && <EmptyState text="No lessons completed yet!" />}
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={250} />} 
      </div>
    );
  }
  if (view === 'desc' && selected) {
    return (
      <div className="card fadein">
        <h2>{selected.title}</h2>
        <p style={{ fontSize: '1.15rem' }}>{selected.description}</p>
        <button onClick={handleBegin}><span role="img" aria-label="begin">👉</span> Begin Lesson</button>
        <button style={{ marginLeft: 12 }} onClick={() => { setView('list'); setSelected(null); }}>Back</button>
      </div>
    );
  }
  if (view === 'content' && selected) {
    const [showConfirm, setShowConfirm] = useState(false);
    return (
      <div className="card fadein" style={{ position: 'relative' }}>
        <h2>{selected.title}</h2>
        <div>{selected.content}</div>
        <button onClick={() => setShowConfirm(true)} style={{ marginTop: 24 }}><span role="img" aria-label="complete">🎉</span> Complete Lesson</button>
        {/* Floating sticky button */}
        <button
          className="sparkle"
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000,
            background: 'var(--accent)',
            color: '#fff',
            fontSize: '1.15rem',
            boxShadow: '0 4px 16px #22c55e55',
            borderRadius: 24,
            padding: '1rem 2.2rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          onClick={() => setShowConfirm(true)}
        >
          <span role="img" aria-label="complete">🎉</span> Complete Lesson
        </button>
        {/* Confirmation dialog */}
        {showConfirm && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(20,83,45,0.18)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: '2rem 2.5rem', boxShadow: '0 4px 24px #22c55e33', textAlign: 'center' }}>
              <h3>Mark lesson as complete?</h3>
              <p>Are you sure you want to complete this lesson?</p>
              <button className="sparkle" style={{ marginRight: 16 }} onClick={() => { handleComplete(); setShowConfirm(false); }}>Yes, Complete</button>
              <button onClick={() => setShowConfirm(false)}>Cancel</button>
            </div>
          </div>
        )}
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={250} />} 
      </div>
    );
  }
  return null;
}

const QUIZZES = [
  {
    lessonId: 1,
    title: "Introduction to Renewable Energy Quiz",
    timeLimit: 30, // seconds
    passMark: 2, // out of 3
    questions: [
      {
        q: "Which of these is NOT a renewable energy source?",
        options: ["Solar", "Wind", "Coal", "Hydro"],
        answer: 2,
        explanations: [
          "Solar is a renewable energy source because it comes from the sun, which is naturally replenished.",
          "Wind is renewable because wind is a natural, ongoing process.",
          "Coal is not renewable; it is a fossil fuel that takes millions of years to form and is depleted when used.",
          "Hydro (water) is renewable as it is part of the Earth's water cycle."
        ]
      },
      {
        q: "What is the main benefit of renewable energy?",
        options: ["It never runs out", "It is always cheap", "It is always sunny", "It is always windy"],
        answer: 0,
        explanations: [
          "Renewable energy sources never run out because they are naturally replenished.",
          "Renewable energy is not always cheap, though costs are falling.",
          "It is not always sunny, so solar is not always available.",
          "It is not always windy, so wind energy is not always available."
        ]
      },
      {
        q: "Which renewable energy comes from plants?",
        options: ["Hydro", "Biomass", "Wind", "Solar"],
        answer: 1,
        explanations: [
          "Hydro comes from water, not plants.",
          "Biomass comes from plants and organic material, making it a plant-based renewable energy.",
          "Wind comes from moving air, not plants.",
          "Solar comes from the sun, not plants."
        ]
      }
    ]
  },
  {
    lessonId: 2,
    title: "Sustainability and You Quiz",
    timeLimit: 25,
    passMark: 2,
    questions: [
      {
        q: "What does sustainability mean?",
        options: [
          "Using resources as fast as possible",
          "Meeting needs without harming the future",
          "Only using solar energy",
          "Ignoring climate change"
        ],
        answer: 1,
        explanations: [
          "Using resources quickly is not sustainable and can harm the future.",
          "Sustainability means meeting our needs without harming future generations' ability to meet theirs.",
          "Sustainability is broader than just using solar energy.",
          "Ignoring climate change is not sustainable."
        ]
      },
      {
        q: "Which of these is a sustainable action?",
        options: ["Throwing away plastic", "Recycling", "Wasting water", "Using more coal"],
        answer: 1,
        explanations: [
          "Throwing away plastic increases pollution and is not sustainable.",
          "Recycling helps reduce waste and is a sustainable action.",
          "Wasting water is not sustainable.",
          "Using more coal increases pollution and is not sustainable."
        ]
      },
      {
        q: "Why is it important to conserve energy?",
        options: ["To save money and resources", "To waste more", "To pollute more", "No reason"],
        answer: 0,
        explanations: [
          "Conserving energy saves money and resources, and helps the environment.",
          "Wasting more energy is not beneficial.",
          "Polluting more is harmful, not helpful.",
          "There are many reasons to conserve energy!"
        ]
      }
    ]
  },
  {
    lessonId: 3,
    title: "Climate Action Steps Quiz",
    timeLimit: 20,
    passMark: 2,
    questions: [
      {
        q: "Which of these helps fight climate change?",
        options: ["Using public transport", "Burning more coal", "Wasting food", "Cutting down trees"],
        answer: 0,
        explanations: [
          "Using public transport reduces emissions and helps fight climate change.",
          "Burning more coal increases emissions and harms the climate.",
          "Wasting food wastes resources and increases emissions.",
          "Cutting down trees reduces the planet's ability to absorb CO2."
        ]
      },
      {
        q: "What is a plant-based food?",
        options: ["Chicken", "Fish", "Beans", "Beef"],
        answer: 2,
        explanations: [
          "Chicken is an animal product, not plant-based.",
          "Fish is an animal product, not plant-based.",
          "Beans are plant-based foods.",
          "Beef is an animal product, not plant-based."
        ]
      },
      {
        q: "How can you reduce waste?",
        options: ["Recycle", "Throw everything away", "Buy more plastic", "Ignore it"],
        answer: 0,
        explanations: [
          "Recycling reduces waste and is the correct answer.",
          "Throwing everything away increases waste.",
          "Buying more plastic increases waste.",
          "Ignoring waste does not help reduce it."
        ]
      }
    ]
  },
  {
    lessonId: 4,
    title: "Green Technology and Innovation Quiz",
    timeLimit: 25,
    passMark: 2,
    questions: [
      {
        q: "What is a smart grid?",
        options: [
          "A type of solar panel",
          "A modern electricity system that handles renewable energy better",
          "A new type of car",
          "A kind of wind turbine"
        ],
        answer: 1,
        explanations: [
          "Solar panels are devices that convert sunlight to electricity, not a grid system.",
          "Smart grids are modern electricity systems that can better handle renewable energy and reduce waste.",
          "Cars are vehicles, not electricity systems.",
          "Wind turbines generate electricity from wind, but don't manage the grid."
        ]
      },
      {
        q: "What is the main advantage of electric vehicles?",
        options: [
          "They're always cheaper to buy",
          "They produce zero emissions while driving",
          "They never need maintenance",
          "They're always faster than gas cars"
        ],
        answer: 1,
        explanations: [
          "Electric vehicles can be more expensive to buy initially, though they save money over time.",
          "Electric vehicles produce zero emissions while driving, making them much cleaner for the environment.",
          "Electric vehicles still need maintenance, just different types than gas cars.",
          "Speed depends on the specific vehicle, not whether it's electric or gas."
        ]
      },
      {
        q: "What is carbon capture technology?",
        options: [
          "A way to burn more coal",
          "Technology that removes CO2 from the atmosphere",
          "A type of solar panel",
          "A new kind of wind turbine"
        ],
        answer: 1,
        explanations: [
          "Burning more coal would increase CO2 emissions, not capture them.",
          "Carbon capture technology removes CO2 from the atmosphere and stores it safely.",
          "Solar panels generate electricity from sunlight, they don't capture carbon.",
          "Wind turbines generate electricity from wind, they don't capture carbon."
        ]
      }
    ]
  }
];

function Quiz({ quizResults, setQuizResults, quizId }) {
  const [ready, setReady] = useState(false);
  const [checked, setChecked] = useState(false);
  const specificQuiz = quizId ? QUIZZES.find(q => q.lessonId === quizId) : null;
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef();
  const [quizResultSaved, setQuizResultSaved] = useState(false);
  // In the Quiz component, add state for pagination
  const [reviewPage, setReviewPage] = useState(0);
  const QUESTIONS_PER_PAGE = 10;

  // Always reset ready and quiz state when quizId changes
  useEffect(() => {
    setReady(false);
    setChecked(false);
    setStep(0);
    setScore(0);
    setSelected(null);
    setAnswers([]);
    setTimeLeft(null);
    setStatus('idle');
    setQuizResultSaved(false);
    if (!quizId) setSelectedQuiz(null);
  }, [quizId]);

  // Handler for Start button
  const handleStart = () => {
    setReady(true);
    setStep(0);
    setScore(0);
    setSelected(null);
    setAnswers([]);
    setTimeLeft(specificQuiz ? specificQuiz.timeLimit : null);
    setStatus('active');
    setQuizResultSaved(false);
    if (!quizId) setSelectedQuiz(null); // reset for quiz list
    setReviewPage(0);
  };

  // Show ready prompt if not ready
  if (!ready) {
    return (
      <div className="card fadein">
        <h2>{specificQuiz ? specificQuiz.title : 'All Quizzes'}</h2>
        <label className="ready-checkbox-label">
          <input type="checkbox" className="ready-checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} /> I am ready to {specificQuiz ? 'start this quiz' : 'view all quizzes'}
        </label>
        <button className="sparkle" disabled={!checked} onClick={handleStart}>Start</button>
      </div>
    );
  }

  // If quizId is present and ready, always use the corresponding quiz
  if (quizId && ready && specificQuiz) {
    const quiz = specificQuiz;
    const isLast = step === quiz.questions.length - 1;
    if (status === 'active') {
      const current = quiz.questions[step];
      return (
        <div className="card fadein">
          <h2>{quiz.title}</h2>
          <ProgressBar value={step + 1} max={quiz.questions.length} />
          <div style={{ marginBottom: 12, color: '#185a9d', fontWeight: 600 }}>
            Question {step + 1} of {quiz.questions.length} | Time left: {timeLeft}s
          </div>
          <h3>{current.q}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {current.options.map((opt, i) => (
              <li key={i}>
                <label style={{ display: 'block', margin: '0.5rem 0', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="quiz"
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                  />{' '}
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => {
              if (step === 0) return;
              const newStep = step - 1;
              setStep(newStep);
              setSelected(answers[newStep] !== undefined ? answers[newStep] : null);
            }} disabled={step === 0}>Back</button>
            {isLast ? (
              <button onClick={() => {
                if (selected === null) return;
                const newAnswers = [...answers];
                newAnswers[step] = selected;
                setAnswers(newAnswers);
                let newScore = 0;
                for (let i = 0; i < quiz.questions.length; i++) {
                  if (newAnswers[i] === quiz.questions[i].answer) newScore++;
                }
                setScore(newScore);
                setStatus('finished');
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 2500);
                // Save quiz result
                if (!quizResultSaved) {
                  const passed = newScore >= quiz.passMark;
                  const quizResult = { title: quiz.title, score: newScore, total: quiz.questions.length, passed };
                  setQuizResults(prev => [...prev, quizResult]);
                  setQuizResultSaved(true);
                }
                setReviewPage(0);
              }} disabled={selected === null}><span role="img" aria-label="submit">✅</span> Submit</button>
            ) : (
              <button onClick={() => {
                if (selected === null) return;
                const newAnswers = [...answers];
                newAnswers[step] = selected;
                setAnswers(newAnswers);
                setStep(step + 1);
                setSelected(newAnswers[step + 1] !== undefined ? newAnswers[step + 1] : null);
              }} disabled={selected === null}><span role="img" aria-label="next">➡️</span> Next</button>
            )}
          </div>
          <ProgressBar value={step + 1} max={quiz.questions.length} />
        </div>
      );
    }
    if (status === 'finished' || status === 'failed') {
      return (
        <div className="card fadein">
          <h2>{quiz.title}</h2>
          <div style={{ marginBottom: 12, color: '#185a9d', fontWeight: 600 }}>
            {quiz.questions.length} questions | Pass mark: {quiz.passMark} | Time: {quiz.timeLimit}s
          </div>
          <h3>Quiz {status === 'failed' ? 'Failed (Time Up)' : score >= quiz.passMark ? 'Passed! 🎉' : 'Failed'}</h3>
          <p>Your score: {score} / {quiz.questions.length}</p>
          <p>{score >= quiz.passMark ? 'Congratulations! You passed the quiz.' : 'You did not reach the pass mark. Try again!'}</p>
          <button onClick={() => {
            setStep(0);
            setScore(0);
            setSelected(null);
            setAnswers([]);
            setTimeLeft(quiz.timeLimit);
            setStatus('active');
            setQuizResultSaved(false);
            setReviewPage(0);
          }}><span role="img" aria-label="retake">🔄</span> Retake Quiz</button>
          <button style={{ marginLeft: 12 }} onClick={() => window.location.href = '/quiz'}><span role="img" aria-label="back">⬅️</span> Back to Quizzes</button>
          {score >= quiz.passMark && showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={250} />} 
          <div style={{ marginTop: 32 }}>
            <h3>Review Answers</h3>
            <ol style={{ paddingLeft: 20 }}>
              {quiz.questions.slice(reviewPage * QUESTIONS_PER_PAGE, (reviewPage + 1) * QUESTIONS_PER_PAGE).map((q, idx) => {
                const realIdx = reviewPage * QUESTIONS_PER_PAGE + idx;
                const userAnswer = answers[realIdx];
                const isCorrect = userAnswer === q.answer;
                return (
                  <li key={realIdx} style={{ marginBottom: 24 }}>
                    <div style={{ fontWeight: 600, color: isCorrect ? '#2e7d32' : '#d32f2f' }}>
                      Q{realIdx + 1}: {q.q}
                    </div>
                    <div style={{ marginTop: 4 }}>
                      <b>Your answer:</b> {userAnswer !== undefined ? q.options[userAnswer] : <span style={{ color: '#888' }}>No answer</span>} {isCorrect ? '✔️' : '❌'}
                    </div>
                    <div><b>Correct answer:</b> {q.options[q.answer]}</div>
                    <ul style={{ marginTop: 8, marginBottom: 0 }}>
                      {q.options.map((opt, i) => (
                        <li key={i} style={{ color: i === q.answer ? '#2e7d32' : (userAnswer === i && i !== q.answer ? '#d32f2f' : '#185a9d'), fontWeight: i === q.answer ? 700 : 400 }}>
                          {opt}: {q.explanations ? q.explanations[i] : (i === q.answer ? 'This is the correct answer.' : 'This is not correct.')}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
            <div style={{ display: 'flex', gap: 12, marginTop: 16, justifyContent: 'center' }}>
              <button onClick={() => setReviewPage(p => Math.max(0, p - 1))} disabled={reviewPage === 0}>Previous</button>
              <span>Page {reviewPage + 1} of {Math.ceil(quiz.questions.length / QUESTIONS_PER_PAGE)}</span>
              <button onClick={() => setReviewPage(p => Math.min(Math.ceil(quiz.questions.length / QUESTIONS_PER_PAGE) - 1, p + 1))} disabled={reviewPage >= Math.ceil(quiz.questions.length / QUESTIONS_PER_PAGE) - 1}>Next</button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  // Otherwise, use the old logic for quiz list
  if (!selectedQuiz) {
    return (
      <div className="card fadein">
        <h2>Choose a Quiz <span role="img" aria-label="quiz">📝</span></h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {QUIZZES.map((quiz, i) => (
            <li key={i} style={{ margin: '1.5rem 0', background: '#e0ffe6', borderRadius: 12, padding: '1.2rem 1.5rem', boxShadow: '0 2px 8px #43cea233', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <b style={{ fontSize: '1.15rem', color: '#185a9d' }}>{quiz.title} <span role="img" aria-label="quiz">📝</span></b>
                <div style={{ color: '#2e7d32', fontSize: '1rem', marginTop: 4 }}>
                  {quiz.questions.length} questions | {quiz.timeLimit} seconds | Pass mark: {quiz.passMark}
                </div>
              </div>
              <button onClick={() => {
                setSelectedQuiz(quiz);
                setStep(0);
                setScore(0);
                setSelected(null);
                setAnswers([]);
                setTimeLeft(quiz.timeLimit);
                setStatus('active');
                setQuizResultSaved(false);
                setReviewPage(0);
              }}><span role="img" aria-label="start">🚀</span> Start Quiz</button>
            </li>
          ))}
        </ul>
        {quizResults.length === 0 && <EmptyState text="No quizzes taken yet!" />}
      </div>
    );
  }

  // Quiz UI for quiz list mode
  const quiz = selectedQuiz;
  const isLast = step === quiz.questions.length - 1;
  if (status === 'active') {
    const current = quiz.questions[step];
    return (
      <div className="card fadein">
        <h2>{quiz.title}</h2>
        <ProgressBar value={step + 1} max={quiz.questions.length} />
        <div style={{ marginBottom: 12, color: '#185a9d', fontWeight: 600 }}>
          Question {step + 1} of {quiz.questions.length} | Time left: {timeLeft}s
        </div>
        <h3>{current.q}</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {current.options.map((opt, i) => (
            <li key={i}>
              <label style={{ display: 'block', margin: '0.5rem 0', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="quiz"
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                />{' '}
                {opt}
              </label>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => {
            if (step === 0) return;
            const newStep = step - 1;
            setStep(newStep);
            setSelected(answers[newStep] !== undefined ? answers[newStep] : null);
          }} disabled={step === 0}>Back</button>
          {isLast ? (
            <button onClick={() => {
              if (selected === null) return;
              const newAnswers = [...answers];
              newAnswers[step] = selected;
              setAnswers(newAnswers);
              let newScore = 0;
              for (let i = 0; i < quiz.questions.length; i++) {
                if (newAnswers[i] === quiz.questions[i].answer) newScore++;
              }
              setScore(newScore);
              setStatus('finished');
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 2500);
              // Save quiz result
              if (!quizResultSaved) {
                const passed = newScore >= quiz.passMark;
                const quizResult = { title: quiz.title, score: newScore, total: quiz.questions.length, passed };
                setQuizResults(prev => [...prev, quizResult]);
                setQuizResultSaved(true);
              }
              setReviewPage(0);
            }} disabled={selected === null}><span role="img" aria-label="submit">✅</span> Submit</button>
          ) : (
            <button onClick={() => {
              if (selected === null) return;
              const newAnswers = [...answers];
              newAnswers[step] = selected;
              setAnswers(newAnswers);
              setStep(step + 1);
              setSelected(newAnswers[step + 1] !== undefined ? newAnswers[step + 1] : null);
            }} disabled={selected === null}><span role="img" aria-label="next">➡️</span> Next</button>
          )}
        </div>
        <ProgressBar value={step + 1} max={quiz.questions.length} />
      </div>
    );
  }
  if (status === 'finished' || status === 'failed') {
    return (
      <div className="card fadein">
        <h2>{quiz.title}</h2>
        <div style={{ marginBottom: 12, color: '#185a9d', fontWeight: 600 }}>
          {quiz.questions.length} questions | Pass mark: {quiz.passMark} | Time: {quiz.timeLimit}s
        </div>
        <h3>Quiz {status === 'failed' ? 'Failed (Time Up)' : score >= quiz.passMark ? 'Passed! 🎉' : 'Failed'}</h3>
        <p>Your score: {score} / {quiz.questions.length}</p>
        <p>{score >= quiz.passMark ? 'Congratulations! You passed the quiz.' : 'You did not reach the pass mark. Try again!'}</p>
        <button onClick={() => {
          setStep(0);
          setScore(0);
          setSelected(null);
          setAnswers([]);
          setTimeLeft(quiz.timeLimit);
          setStatus('active');
          setQuizResultSaved(false);
          setReviewPage(0);
        }}><span role="img" aria-label="retake">🔄</span> Retake Quiz</button>
        <button style={{ marginLeft: 12 }} onClick={() => setSelectedQuiz(null)}><span role="img" aria-label="back">⬅️</span> Back to Quizzes</button>
        {score >= quiz.passMark && showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={250} />} 
        <div style={{ marginTop: 32 }}>
          <h3>Review Answers</h3>
          <ol style={{ paddingLeft: 20 }}>
            {quiz.questions.slice(reviewPage * QUESTIONS_PER_PAGE, (reviewPage + 1) * QUESTIONS_PER_PAGE).map((q, idx) => {
              const realIdx = reviewPage * QUESTIONS_PER_PAGE + idx;
              const userAnswer = answers[realIdx];
              const isCorrect = userAnswer === q.answer;
              return (
                <li key={realIdx} style={{ marginBottom: 24 }}>
                  <div style={{ fontWeight: 600, color: isCorrect ? '#2e7d32' : '#d32f2f' }}>
                    Q{realIdx + 1}: {q.q}
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <b>Your answer:</b> {userAnswer !== undefined ? q.options[userAnswer] : <span style={{ color: '#888' }}>No answer</span>} {isCorrect ? '✔️' : '❌'}
                  </div>
                  <div><b>Correct answer:</b> {q.options[q.answer]}</div>
                  <ul style={{ marginTop: 8, marginBottom: 0 }}>
                    {q.options.map((opt, i) => (
                      <li key={i} style={{ color: i === q.answer ? '#2e7d32' : (userAnswer === i && i !== q.answer ? '#d32f2f' : '#185a9d'), fontWeight: i === q.answer ? 700 : 400 }}>
                        {opt}: {q.explanations ? q.explanations[i] : (i === q.answer ? 'This is the correct answer.' : 'This is not correct.')}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
          <div style={{ display: 'flex', gap: 12, marginTop: 16, justifyContent: 'center' }}>
            <button onClick={() => setReviewPage(p => Math.max(0, p - 1))} disabled={reviewPage === 0}>Previous</button>
            <span>Page {reviewPage + 1} of {Math.ceil(quiz.questions.length / QUESTIONS_PER_PAGE)}</span>
            <button onClick={() => setReviewPage(p => Math.min(Math.ceil(quiz.questions.length / QUESTIONS_PER_PAGE) - 1, p + 1))} disabled={reviewPage >= Math.ceil(quiz.questions.length / QUESTIONS_PER_PAGE) - 1}>Next</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function Chatbot() {
  const user = getUser();
  const chatKey = user ? `vibe_chat_history_${user.username}` : 'vibe_chat_history_guest';
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem(chatKey);
    return saved ? JSON.parse(saved) : [
      { sender: 'ai', text: `Hello${user ? ', ' + user.username : ''}! 🌱 I'm your Green Economy AI. Ask me anything about sustainability, energy, or climate action!` }
    ];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sessionStorage.setItem(chatKey, JSON.stringify(messages));
  }, [messages, chatKey]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input, name: user?.username };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    setInput("");
    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: "ai", text: data.response }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: "ai", text: "Sorry, there was an error." }]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <h2>AI Chatbot</h2>
      <div style={{
        height: 300,
        overflowY: 'auto',
        marginBottom: 10,
        padding: 8,
        background: '#f6fff6',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === 'user' ? 'user-msg' : 'ai-msg'}>
            <b>{msg.sender === 'user' ? (user?.username || 'You') : 'AI'}:</b> {msg.text}
          </div>
        ))}
        {loading && <div className="ai-msg"><i>AI is typing...</i></div>}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? sendMessage() : null}
        placeholder="Ask about sustainability, energy, or climate action..."
        style={{ width: '70%' }}
        disabled={loading}
      />
      <button onClick={sendMessage} disabled={loading || !input.trim()}>Send</button>
    </div>
  );
}

// Helper functions for localStorage user/session
function saveUser(user) {
  localStorage.setItem('vibe_user', JSON.stringify(user));
}
function getUser() {
  const u = localStorage.getItem('vibe_user');
  return u ? JSON.parse(u) : null;
}
function clearUser() {
  localStorage.removeItem('vibe_user');
}

function AuthNav({ user, onLogout }) {
  return user ? (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
      <Link to="/profile">Profile</Link>
      <button onClick={onLogout} style={{ background: '#ffe066', color: '#185a9d', border: 'none', borderRadius: 6, padding: '0.3rem 1rem', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
    </div>
  ) : (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const handleSignup = e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!username || !password) return setError('All fields required');
    if (localStorage.getItem('vibe_user_' + username)) return setError('User already exists');
    const user = { username, password, completedLessons: [], quizResults: [] };
    localStorage.setItem('vibe_user_' + username, JSON.stringify(user));
    setUsername('');
    setPassword('');
    setSuccess('Signup successful! Please login to continue.');
    setTimeout(() => navigate('/login'), 1500);
  };
  return (
    <div className="card" style={{ maxWidth: 400 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      {error && <div style={{ color: '#d32f2f', marginTop: 8 }}>{error}</div>}
      {success && <div style={{ color: '#2e7d32', marginTop: 8 }}>{success}</div>}
    </div>
  );
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const u = localStorage.getItem('vibe_user_' + username);
    if (!u) return setError('User not found');
    const user = JSON.parse(u);
    if (user.password !== password) return setError('Incorrect password');
    saveUser(user);
    onLogin(user);
    sessionStorage.removeItem('vibe_chat_history');
    sessionStorage.removeItem(`vibe_chat_history_${user.username}`);
    navigate('/');
  };
  return (
    <div className="card" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: '#d32f2f', marginTop: 8 }}>{error}</div>}
    </div>
  );
}

function ProfilePage({ user }) {
  // Quiz filter and pagination state
  const [selectedQuiz, setSelectedQuiz] = useState('All');
  const [page, setPage] = useState(0);
  const RESULTS_PER_PAGE = 10;

  // Get unique quiz titles
  const quizTitles = Array.from(new Set(user.quizResults.map(qr => qr.title)));

  // Filter results
  const filteredResults = selectedQuiz === 'All'
    ? user.quizResults
    : user.quizResults.filter(qr => qr.title === selectedQuiz);

  // Paginate results
  const paginatedResults = filteredResults.slice(page * RESULTS_PER_PAGE, (page + 1) * RESULTS_PER_PAGE);
  const totalPages = Math.ceil(filteredResults.length / RESULTS_PER_PAGE);

  // Reset page to 0 when filter changes
  useEffect(() => { setPage(0); }, [selectedQuiz]);

  // Get completed lesson titles
  const completedLessonTitles = LESSONS.filter(lesson => user.completedLessons.includes(lesson.id)).map(lesson => lesson.title);

  return (
    <div className="card" style={{ maxWidth: 500 }}>
      <h2>Profile</h2>
      <div><b>Username:</b> {user.username}</div>
      <div style={{ margin: '1rem 0' }}>
        <b>Lessons Completed:</b> {user.completedLessons.length}
        <ul>
          {completedLessonTitles.length === 0 && <li>No lessons completed yet.</li>}
          {completedLessonTitles.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      </div>
      <div style={{ margin: '1rem 0' }}><b>Quiz Results:</b>
        <div style={{ marginBottom: 8 }}>
          <label><b>Filter by Quiz:</b> </label>
          <select value={selectedQuiz} onChange={e => setSelectedQuiz(e.target.value)}>
            <option value="All">All</option>
            {quizTitles.map(title => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
        </div>
        <ul>
          {filteredResults.length === 0 && <li>No quizzes taken yet.</li>}
          {paginatedResults.map((qr, i) => (
            <li key={page * RESULTS_PER_PAGE + i}>{qr.title}: {qr.score} / {qr.total} ({qr.passed ? 'Passed' : 'Failed'})</li>
          ))}
        </ul>
        {filteredResults.length > RESULTS_PER_PAGE && (
          <div style={{ display: 'flex', gap: 12, marginTop: 8, justifyContent: 'center' }}>
            <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>Previous</button>
            <span>Page {page + 1} of {totalPages}</span>
            <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Simulation components
function SolarSchoolSim() {
  const navigate = useNavigate();
  // Mock panel types
  const panelTypes = [
    { name: 'Standard', output: 300, cost: 200 }, // watts per panel, cost per panel
    { name: 'Premium', output: 370, cost: 300 },
    { name: 'Ultra', output: 450, cost: 400 }
  ];
  const batteryTypes = [
    { name: 'None', capacity: 0, cost: 0 },
    { name: 'Small (5kWh)', capacity: 5, cost: 2500 },
    { name: 'Medium (10kWh)', capacity: 10, cost: 4500 },
    { name: 'Large (20kWh)', capacity: 20, cost: 8000 }
  ];
  const [panelIdx, setPanelIdx] = useState(0);
  const [numPanels, setNumPanels] = useState(10);
  const [batteryIdx, setBatteryIdx] = useState(0);
  const [results, setResults] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const panel = panelTypes[panelIdx];
    const battery = batteryTypes[batteryIdx];
    const totalOutput = panel.output * numPanels; // watts
    const dailyKWh = (totalOutput * 5) / 1000; // assume 5 sun hours/day
    const totalCost = (panel.cost * numPanels) + battery.cost;
    const co2Savings = dailyKWh * 0.7 * 365; // 0.7kg CO2 saved per kWh, per year
    setResults({
      panel: panel.name,
      numPanels,
      battery: battery.name,
      dailyKWh: dailyKWh.toFixed(1),
      totalCost,
      co2Savings: Math.round(co2Savings)
    });
  };

  return (
    <div className="card fadein" style={{ maxWidth: 600 }}>
      <button onClick={() => navigate('/simulations')} style={{ marginBottom: 16 }}>&larr; Back to Simulations</button>
      <h2>Solar-Powered School Designer</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>
          Panel Type:
          <select value={panelIdx} onChange={e => setPanelIdx(Number(e.target.value))}>
            {panelTypes.map((p, i) => (
              <option value={i} key={p.name}>{p.name} ({p.output}W, ${p.cost}/panel)</option>
            ))}
          </select>
        </label>
        <label>
          Number of Panels:
          <input type="number" min={1} max={100} value={numPanels} onChange={e => setNumPanels(Number(e.target.value))} />
        </label>
        <label>
          Battery Storage:
          <select value={batteryIdx} onChange={e => setBatteryIdx(Number(e.target.value))}>
            {batteryTypes.map((b, i) => (
              <option value={i} key={b.name}>{b.name} {b.capacity ? `(${b.capacity}kWh, $${b.cost})` : ''}</option>
            ))}
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>
      {results && (
        <div className="card sim-result-card">
          <h3>Results</h3>
          <div><b>Panel Type:</b> {results.panel}</div>
          <div><b>Number of Panels:</b> {results.numPanels}</div>
          <div><b>Battery:</b> {results.battery}</div>
          <div><b>Estimated Daily Output:</b> {results.dailyKWh} kWh</div>
          <div><b>Total Cost:</b> ${results.totalCost.toLocaleString()}</div>
          <div><b>Estimated CO₂ Savings (per year):</b> {results.co2Savings} kg</div>
        </div>
      )}
    </div>
  );
}

function CarbonFootprintSim() {
  const navigate = useNavigate();
  const [carKm, setCarKm] = useState(0);
  const [meatMeals, setMeatMeals] = useState(0);
  const [energyKWh, setEnergyKWh] = useState(0);
  const [results, setResults] = useState(null);

  // Emission factors (mock values)
  const CAR_CO2_PER_KM = 0.2; // kg CO2 per km
  const MEAT_MEAL_CO2 = 2.5; // kg CO2 per meal
  const ENERGY_CO2_PER_KWH = 0.5; // kg CO2 per kWh

  const handleSubmit = e => {
    e.preventDefault();
    const carCO2 = carKm * CAR_CO2_PER_KM;
    const foodCO2 = meatMeals * MEAT_MEAL_CO2;
    const energyCO2 = energyKWh * ENERGY_CO2_PER_KWH;
    const total = carCO2 + foodCO2 + energyCO2;
    setResults({
      carCO2: carCO2.toFixed(1),
      foodCO2: foodCO2.toFixed(1),
      energyCO2: energyCO2.toFixed(1),
      total: total.toFixed(1),
      annual: (total * 52).toFixed(0)
    });
  };

  return (
    <div className="card fadein" style={{ maxWidth: 600 }}>
      <button onClick={() => navigate('/simulations')} style={{ marginBottom: 16 }}>&larr; Back to Simulations</button>
      <h2>Carbon Footprint Tracker</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>
          Car travel (km per week):
          <input type="number" min={0} value={carKm} onChange={e => setCarKm(Number(e.target.value))} />
        </label>
        <label>
          Meat-based meals (per week):
          <input type="number" min={0} value={meatMeals} onChange={e => setMeatMeals(Number(e.target.value))} />
        </label>
        <label>
          Home energy use (kWh per week):
          <input type="number" min={0} value={energyKWh} onChange={e => setEnergyKWh(Number(e.target.value))} />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {results && (
        <div className="card sim-result-card">
          <h3>Your Carbon Footprint</h3>
          <div><b>Car travel:</b> {results.carCO2} kg CO₂/week</div>
          <div><b>Meat meals:</b> {results.foodCO2} kg CO₂/week</div>
          <div><b>Home energy:</b> {results.energyCO2} kg CO₂/week</div>
          <div style={{ marginTop: 8 }}><b>Total:</b> {results.total} kg CO₂/week</div>
          <div><b>Estimated annual footprint:</b> {results.annual} kg CO₂/year</div>
        </div>
      )}
    </div>
  );
}

function EcoVillageSim() {
  const navigate = useNavigate();
  const [energy, setEnergy] = useState('solar');
  const [food, setFood] = useState('local');
  const [waste, setWaste] = useState('recycle');
  const [results, setResults] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    // Simple scoring logic
    let sustainability = 0, happiness = 0, resources = 0;
    // Energy
    if (energy === 'solar') { sustainability += 3; resources += 2; happiness += 1; }
    else if (energy === 'wind') { sustainability += 3; resources += 1; happiness += 2; }
    else if (energy === 'coal') { sustainability -= 2; resources += 3; happiness -= 1; }
    // Food
    if (food === 'local') { sustainability += 2; happiness += 2; resources += 1; }
    else if (food === 'imported') { sustainability -= 1; happiness += 1; resources += 2; }
    else if (food === 'processed') { sustainability -= 2; happiness -= 1; resources += 3; }
    // Waste
    if (waste === 'recycle') { sustainability += 2; happiness += 1; resources += 1; }
    else if (waste === 'compost') { sustainability += 3; happiness += 2; resources += 0; }
    else if (waste === 'landfill') { sustainability -= 2; happiness -= 1; resources += 2; }
    setResults({ sustainability, happiness, resources });
  };

  return (
    <div className="card fadein" style={{ maxWidth: 600 }}>
      <button onClick={() => navigate('/simulations')} style={{ marginBottom: 16 }}>&larr; Back to Simulations</button>
      <h2>Virtual Eco-Village Manager</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>
          Energy Source:
          <select value={energy} onChange={e => setEnergy(e.target.value)}>
            <option value="solar">Solar</option>
            <option value="wind">Wind</option>
            <option value="coal">Coal</option>
          </select>
        </label>
        <label>
          Food Source:
          <select value={food} onChange={e => setFood(e.target.value)}>
            <option value="local">Local</option>
            <option value="imported">Imported</option>
            <option value="processed">Processed</option>
          </select>
        </label>
        <label>
          Waste Management:
          <select value={waste} onChange={e => setWaste(e.target.value)}>
            <option value="recycle">Recycle</option>
            <option value="compost">Compost</option>
            <option value="landfill">Landfill</option>
          </select>
        </label>
        <button type="submit">See Results</button>
      </form>
      {results && (
        <div className="card sim-result-card">
          <h3>Village Results</h3>
          <div><b>Sustainability:</b> {results.sustainability}</div>
          <div><b>Happiness:</b> {results.happiness}</div>
          <div><b>Resources:</b> {results.resources}</div>
        </div>
      )}
    </div>
  );
}

function Simulations() {
  return (
    <div className="card fadein" style={{ maxWidth: 700 }}>
      <h2>Simulations</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        <div className="simulations-card" style={{ flex: 1, minWidth: 220 }}>
          <h3>Solar-Powered School</h3>
          <p>Design a solar energy system for a school and see the results.</p>
          <Link to="/simulations/solar-school"><button>Try Now</button></Link>
        </div>
        <div className="simulations-card" style={{ flex: 1, minWidth: 220 }}>
          <h3>Carbon Footprint Tracker</h3>
          <p>Track your carbon footprint and set sustainability goals.</p>
          <Link to="/simulations/carbon-footprint"><button>Try Now</button></Link>
        </div>
        <div className="simulations-card" style={{ flex: 1, minWidth: 220 }}>
          <h3>Eco-Village Manager</h3>
          <p>Manage a virtual eco-village and make sustainable choices.</p>
          <Link to="/simulations/eco-village"><button>Try Now</button></Link>
        </div>
      </div>
    </div>
  );
}

// Contact Us page
function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setName(''); setEmail(''); setMessage('');
  };
  return (
    <div className="card fadein" style={{ maxWidth: 500 }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>Name:<input value={name} onChange={e => setName(e.target.value)} required /></label>
        <label>Email:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
        <label>Message:<textarea value={message} onChange={e => setMessage(e.target.value)} required style={{ minHeight: 80 }} /></label>
        <button type="submit">Send</button>
      </form>
      {success && <div style={{ color: '#2e7d32', marginTop: 12 }}>Thank you! Your message has been sent.</div>}
    </div>
  );
}

function withReadyPrompt(Component, labelText = 'I am ready to start this simulation', buttonText = 'Start Simulation') {
  return function ReadyWrapper(props) {
    const [ready, setReady] = useState(false);
    const [checked, setChecked] = useState(false);
    if (!ready) return (
      <div className="card fadein">
        <h2>{props.title || 'Simulation'}</h2>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '1.5rem 0' }}>
          <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} /> {labelText}
        </label>
        <button className="sparkle" disabled={!checked} onClick={() => setReady(true)}>{buttonText}</button>
      </div>
    );
    return <Component {...props} />;
  };
}

const SolarSchoolSimWithPrompt = withReadyPrompt(SolarSchoolSim, 'I am ready to start this simulation', 'Start Simulation');
const CarbonFootprintSimWithPrompt = withReadyPrompt(CarbonFootprintSim, 'I am ready to start this simulation', 'Start Simulation');
const EcoVillageSimWithPrompt = withReadyPrompt(EcoVillageSim, 'I am ready to start this simulation', 'Start Simulation');

function LessonPage({ completedLessons, setCompletedLessons }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = LESSONS.find(l => l.id === Number(id));
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [completed, setCompleted] = useState(() => {
    return completedLessons && completedLessons.includes(Number(id));
  });
  const handleComplete = () => {
    const user = getUser();
    if (user && !user.completedLessons.includes(Number(id))) {
      const updated = { ...user, completedLessons: [...user.completedLessons, Number(id)] };
      localStorage.setItem('vibe_user_' + user.username, JSON.stringify(updated));
      setCompleted(true);
      if (setCompletedLessons) {
        setCompletedLessons(prev => prev.includes(Number(id)) ? prev : [...prev, Number(id)]);
      }
    }
    setShowConfetti(true);
    setShowCongrats(true);
    setTimeout(() => {
      setShowConfetti(false);
      navigate('/lessons');
    }, 2200);
  };
  if (!lesson) return <div className="card">Lesson not found.</div>;
  return (
    <div className="card fadein" style={{ position: 'relative', paddingBottom: '6rem' }}>
      <h2>{lesson.title}</h2>
      <div>{lesson.content}</div>
      <button
        className="sparkle complete-lesson-btn"
        style={{
          position: 'fixed',
          left: '50%',
          bottom: 32,
          transform: 'translateX(-50%)',
          zIndex: 1200,
          background: 'var(--accent)',
          color: '#fff',
          fontSize: '1.25rem',
          fontWeight: 700,
          borderRadius: 32,
          padding: '1.2rem 3rem',
          boxShadow: '0 6px 24px #22c55e55',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          border: 'none',
          cursor: 'pointer',
          animation: 'bounceBtn 1.2s infinite alternate',
        }}
        onClick={handleComplete}
      >
        <span role="img" aria-label="check">✅</span> Complete
      </button>
      {showCongrats && (
        <div style={{ marginTop: 32, color: 'var(--accent)', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center' }}>
          🎉 Congratulations on completing the lesson! 🎉
        </div>
      )}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={250} />} 
      <style>{`
        @keyframes bounceBtn {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.08); }
        }
        .complete-lesson-btn:hover {
          animation: bounceBtn 0.4s;
          background: linear-gradient(90deg, #22c55e 0%, #fde047 100%);
        }
      `}</style>
    </div>
  );
}

function QuizPage({ quizResults, setQuizResults }) {
  const { id } = useParams();
  return <Quiz quizId={Number(id)} quizResults={quizResults} setQuizResults={setQuizResults} />;
}

function App() {
  const [user, setUser] = useState(getUser());
  const [completedLessons, setCompletedLessons] = useState(user ? user.completedLessons : []);
  const [quizResults, setQuizResults] = useState(user ? user.quizResults : []);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('vibe_theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });
  const [dropdown, setDropdown] = useState(null); // 'lessons', 'quiz', 'sim', or null
  const navRef = useRef();

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem('vibe_theme', theme);
  }, [theme]);

  useEffect(() => {
    if (user) {
      setCompletedLessons(user.completedLessons);
      setQuizResults(user.quizResults);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const updated = { ...user, completedLessons, quizResults };
      saveUser(updated);
      setUser(updated);
      localStorage.setItem('vibe_user_' + user.username, JSON.stringify(updated));
    }
  }, [completedLessons, quizResults]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setDropdown(null);
    }
    if (dropdown) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdown]);

  const handleLogout = () => {
    clearUser();
    setUser(null);
    setCompletedLessons([]);
    setQuizResults([]);
    sessionStorage.removeItem('vibe_chat_history');
    if (user) sessionStorage.removeItem(`vibe_chat_history_${user.username}`);
  };

  const navLinkStyle = { padding: '0.5rem 1rem', borderRadius: 6, textDecoration: 'none', color: theme === 'dark' ? '#fffbe6' : '#185a9d', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', position: 'relative' };
  const dropdownStyle = { position: 'absolute', top: '2.5rem', left: 0, background: theme === 'dark' ? '#222' : '#fffbe6', boxShadow: '0 2px 8px #43cea233', borderRadius: 8, zIndex: 100, minWidth: 180, padding: '0.5rem 0' };
  const dropdownItemStyle = { display: 'block', padding: '0.5rem 1.2rem', color: theme === 'dark' ? '#fffbe6' : '#185a9d', textDecoration: 'none', background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' };

  return (
    <Router>
      <div style={{ position: 'relative' }}>
        {/* Visual Effects */}
        <div className="confetti">
          <div className="confetti-piece" style={{left:'10vw',background:'#22c55e',animationDelay:'0s'}}></div>
          <div className="confetti-piece" style={{left:'30vw',background:'#fde047',animationDelay:'0.5s'}}></div>
          <div className="confetti-piece" style={{left:'50vw',background:'#38bdf8',animationDelay:'1s'}}></div>
          <div className="confetti-piece" style={{left:'70vw',background:'#fb923c',animationDelay:'1.5s'}}></div>
          <div className="confetti-piece" style={{left:'90vw',background:'#a78bfa',animationDelay:'2s'}}></div>
        </div>
        <div className="sparkle-bg"></div>
        <div className="floating-svg floating-leaf"></div>
        <div className="floating-svg floating-sun"></div>
        <div className="floating-svg floating-sparkle"></div>
        {/* Navigation and routes */}
        <nav ref={navRef} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center', position: 'relative', zIndex: 200 }}>
          <span className="brand" style={{ fontWeight: 700, fontSize: '1.3rem', color: theme === 'dark' ? '#fde047' : 'var(--earth)' }}>🌱 VibeCode</span>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <div style={{ position: 'relative' }} onMouseEnter={() => setDropdown('lessons')} onMouseLeave={() => setDropdown(null)}>
            <button style={navLinkStyle} onClick={() => setDropdown(dropdown === 'lessons' ? null : 'lessons')}>Lessons ▾</button>
            {dropdown === 'lessons' && (
              <div style={dropdownStyle}>
                <Link to="/lessons" style={dropdownItemStyle} onClick={() => setDropdown(null)}>All Lessons</Link>
                <Link to="/lessons/1" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Intro to Renewable Energy</Link>
                <Link to="/lessons/2" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Sustainability and You</Link>
                <Link to="/lessons/3" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Climate Action</Link>
                <Link to="/lessons/4" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Green Technology</Link>
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }} onMouseEnter={() => setDropdown('quiz')} onMouseLeave={() => setDropdown(null)}>
            <button style={navLinkStyle} onClick={() => setDropdown(dropdown === 'quiz' ? null : 'quiz')}>Quiz ▾</button>
            {dropdown === 'quiz' && (
              <div style={dropdownStyle}>
                <Link to="/quiz" style={dropdownItemStyle} onClick={() => setDropdown(null)}>All Quizzes</Link>
                <Link to="/quiz/1" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Renewable Energy Quiz</Link>
                <Link to="/quiz/2" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Sustainability Quiz</Link>
                <Link to="/quiz/3" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Climate Action Quiz</Link>
                <Link to="/quiz/4" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Green Technology Quiz</Link>
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }} onMouseEnter={() => setDropdown('sim')} onMouseLeave={() => setDropdown(null)}>
            <button style={navLinkStyle} onClick={() => setDropdown(dropdown === 'sim' ? null : 'sim')}>Simulations ▾</button>
            {dropdown === 'sim' && (
              <div style={dropdownStyle}>
                <Link to="/simulations" style={dropdownItemStyle} onClick={() => setDropdown(null)}>All Simulations</Link>
                <Link to="/simulations/solar-school" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Solar-Powered School</Link>
                <Link to="/simulations/carbon-footprint" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Carbon Tracker</Link>
                <Link to="/simulations/eco-village" style={dropdownItemStyle} onClick={() => setDropdown(null)}>Eco-Village Manager</Link>
              </div>
            )}
          </div>
          <Link to="/chatbot" style={navLinkStyle}>Chatbot</Link>
          <Link to="/contact" style={navLinkStyle}>Contact Us</Link>
          <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} style={{ marginLeft: 12, background: theme === 'dark' ? '#fde047' : 'var(--earth)', color: theme === 'dark' ? '#14532d' : '#fde047', border: 'none', borderRadius: 6, padding: '0.3rem 1rem', fontWeight: 600, cursor: 'pointer' }}>{theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
          {user ? (
            <>
              <Link to="/profile" style={navLinkStyle}>Profile</Link>
              <button onClick={handleLogout} className="sparkle" style={{ background: '#fde047', color: '#14532d', border: 'none', borderRadius: 6, padding: '0.3rem 1rem', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={navLinkStyle}>Login</Link>
              <Link to="/signup" style={navLinkStyle}>Sign Up</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup onSignup={setUser} />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/profile" element={user ? <ProfilePage user={user} /> : <Login onLogin={setUser} />} />
          <Route path="/lessons" element={user ? <Lessons completedLessons={completedLessons} setCompletedLessons={setCompletedLessons} /> : <Login onLogin={setUser} />} />
          <Route path="/lessons/:id" element={user ? <LessonPage completedLessons={completedLessons} setCompletedLessons={setCompletedLessons} /> : <Login onLogin={setUser} />} />
          <Route path="/quiz" element={user ? <Quiz quizResults={quizResults} setQuizResults={setQuizResults} /> : <Login onLogin={setUser} />} />
          <Route path="/quiz/:id" element={user ? <QuizPage quizResults={quizResults} setQuizResults={setQuizResults} /> : <Login onLogin={setUser} />} />
          <Route path="/simulations" element={user ? <Simulations /> : <Login onLogin={setUser} />} />
          <Route path="/simulations/solar-school" element={user ? <SolarSchoolSimWithPrompt /> : <Login onLogin={setUser} />} />
          <Route path="/simulations/carbon-footprint" element={user ? <CarbonFootprintSimWithPrompt /> : <Login onLogin={setUser} />} />
          <Route path="/simulations/eco-village" element={user ? <EcoVillageSimWithPrompt /> : <Login onLogin={setUser} />} />
          <Route path="/chatbot" element={user ? <Chatbot /> : <Login onLogin={setUser} />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;