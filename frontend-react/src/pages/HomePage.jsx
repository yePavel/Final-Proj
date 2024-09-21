import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {

    const [isActive, setIsActive] = useState('c1')
    const navigate = useNavigate();

    function setActiveCard(SelectedCard) {
        setIsActive(SelectedCard)
    }

    function getBoardIndex(ev) {
        navigate('/boards')
    }
    function getSignUp(ev) {
        navigate('/signup')
    }
    return (
        <section className='homepage'>

            <section className='homepage-container'>
                <div className='main-prev'>
                    <div className='intro'>
                        <h1 >PlanIt brings all your tasks, teammates, and tools together</h1>
                        <p >Keep everything in the same place — even if your team isn’t.</p>
                        <form action="">
                            <input type="text"
                                placeholder='Email' />
                            <button onClick={() => getSignUp()}>Sign Up - it's free!</button>
                            <button onClick={() => getBoardIndex()}>Start Free Trial</button>
                        </form>
                    </div>
                    <img className='conversation-img' src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp" alt="" />
                </div>
            </section>

            <section className='productivity-container'>

                <div className='productivity-text'>
                    <h2>A productivity powerhouse</h2>
                    <p>Simple, flexible, and powerful. All it takes are boards, lists,
                        and cards to get a clear view of who’s doing what and what needs to get done.
                        Learn more in our guide for getting started.</p>
                </div>

                <div className='productivity-slider'>
                    <div className='cards'>
                        <button className={`card ${isActive === 'c1' ? 'card-active' : ''}`} onClick={() => setActiveCard('c1')}>
                            <h3>Boards</h3>
                            <p>Trello boards keep tasks organized and work moving forward.
                                In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                        </button >
                        <button className={`card ${isActive === 'c2' ? 'card-active' : ''}`} onClick={() => setActiveCard('c2')}>
                            <h3>Lists</h3>
                            <p>The different stages of a task. Start as simple as To Do,
                                Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                        </button>
                        <button className={`card ${isActive === 'c3' ? 'card-active' : ''}`} onClick={() => setActiveCard('c3')}>
                            <h3>Cards</h3>
                            <p>Cards represent tasks and ideas and hold all the information to get the job done.
                                As you make progress, move cards across lists to show their status.
                            </p>
                        </button>
                    </div>
                    <div className='slider'>
                        {isActive === 'c1' && <img src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=720&fm=webp" alt="" />}
                        {isActive === 'c2' && <img src="https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=720&fm=webp" alt="" />}
                        {isActive === 'c3' && <img src="https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=720&fm=webp" alt="" />}
                    </div>
                </div>
            </section>
            <section className='homepage-get-started'>
                <div className='sign-up'>
                    <h2>Get Started with PlanIt today</h2>
                    <form action="">
                        <input type="text"
                            placeholder='Email' />
                        <button>Sign up - it's free!</button>
                    </form>
                </div>
            </section>
            <footer className='main-footer'>
                <div className='upper-footer'></div>
                <div className='lower-footer'></div>
            </footer>
        </section>

    );
}
