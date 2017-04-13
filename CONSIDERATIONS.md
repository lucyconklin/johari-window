The purpose of this document is to address the need to have accessible software to all users who visit our app.

#### Physical Considerations

A lack in physical accessibility is when user's can't logically tab around a website. As in, using the tab key to go from html element to html element without a mouse.

Johari Window is tab friendly. As in, any user can navigate the site using the tab key on their keyboard.

  - Use tab to select the desired element.
  - If the desired element is a checkbox, hit the space bar to select the desired checkbox.
  - The user can enter their desired information by selecting buttons with tab and then hitting the enter key.

  Pretty much all buttons are highlighted when the user tabs over them:
  ![Screenshot](https://cloud.githubusercontent.com/assets/19585280/24982439/b4e55b04-1f9e-11e7-830a-5b8bdd92b165.png)

#### Visual Considerations

There are many visual aspects that can bring down the user experience on a website. We talked about physical accessiblity, now we will address visual accessibility. What good is a website if color-blind and blind users cannot enjoy it also?

Johari Window is pretty user friendly for people who have color-blindness. The App has styles and colors that are friendly to almost all forms of color-blindness.

  - The colors may change due to specific forms of color-blindness, but users can still see the difference between elements on the page
  - The exception to this rule is for users with [achromatopsia](https://en.wikipedia.org/wiki/Achromatopsia)
      - Achromatopsia is known as total color blindness
      - Inconsistency if people afflicted with Achromatopsia are completely color-blind or not
      - This is a very rare form of color-blindness; however, users afflicted with it can still see black/white/grey. This may make some aspects of the app more difficult to work with, but not so much as to make the app insufferably unusable.

  Our site looks like this normally:
  ![Screenshot](https://cloud.githubusercontent.com/assets/19585280/24982368/512a0632-1f9e-11e7-8bc5-d6acd6a156b1.png)

  Through the lens of Achromatopsia:
  ![Screenshot](https://cloud.githubusercontent.com/assets/19585280/24982315/21bd322a-1f9e-11e7-8ca0-553eadb05ad2.png)


It would take some patience and effort to navigate the app blindly. With ChromeVox, there are a couple of situations in particular that would be confusing or frustrating.


  - In a couple places, the app has greyed out, unclickable links or buttons that become clickable after certain conditions are met.
      - In ChromeVox, it still makes these elements sound like they are available links to click, which they are not. For instance, on the my assignments route, if the user has already submitted a Johari for another person, ChromeVox still says that person's name is still a clickable link, even though it is not.
      - The same can be said for the submit button when users are submitting a Johari for another user. The button does not become clickable until 15 adjectives are selected. A blind person has no way of knowing this.
  - Those are the only two struggles for someone who had their eyes closed and a pretty good familiarity with the app. It would more than likely be a different experience for a blind newcomer to the site.
