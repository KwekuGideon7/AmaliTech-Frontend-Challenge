# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700





/* Mobile styles */

@media (max-width: 375px) {

    html,body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Header styles */
    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 120px;
    }

    img{
        max-width: 100%;
        max-height: 200px;
    }
    body{
        background-color: var(--todo-bg);
        box-shadow: 0 42px 30px -9px var(--todo-shadow);
        border-radius: 5px;
        padding: 0 15px;
        margin: 0 0 15px;
    }

    input[type="text"]{
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 0.5px;
        padding: 0 0 0 20px;
        background: var(--todo-bg);
        color: var(--font-color);
    }

                                                                                                                                                                                                                                                                                                         n
    /* Main styles */
    main {
      padding: 0 16px;
    }
  
    /* Add new item styles */
    .add-new-item {
      padding: 16px 0;
    }
  
    /* List item styles */
    .list-item {
      font-size: 16px;
      line-height: 20px;
    }
  
    /* Bottom items styles */
    .bottom-items {
      padding: 16px 0;
      flex-direction: column;
      align-items: center;
    }
  
    /* Filter styles */
    .filter {
      margin-top: 16px;
    }
  
    /* Clear completed styles */
    .clear {
      margin-top: 16px;
    }
  }
  




  @media (min-width: 1440px) {
    .ftext h3{
        position: absolute;
        width: 179px;
        height: 14px;
        left: 865px;
        top: 700px;
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 100;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.194444px;
        color: #9495A5;
    }
}
@media (min-width: 375px) and (max-width: 768px) {
    .ftext h3{
        position: absolute;
        width: 179px;
        height: 14px;
        left: 300px;
        top: 700px;
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 100;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.194444px;
        color: #9495A5;
    }
}
@media (max-width: 375px) {
    body{
        width: 375px;
        height: 730px;
    }

    img{
        --bg-top-image: 0 0 url(./images/bg-desktop-dark.jpg) no-repeat ;
        position: absolute;
        width: 375px;
        height: 730px;
        left: 0px;
        top: 0px;
    }
    .theme-dark{
        position: relative;
        width: 375px;
        height: 730px;
        left: 0px;
        top: 0px;
    }


    .ftext h3{
        position: absolute;
        width: 179px;
        height: 730px;
        left: 20px;
        top: 700px;
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 100;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.194444px;
        color: #9495A5;
    }
}