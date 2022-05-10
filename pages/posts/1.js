import P from '../../components/post/P';
import DiskList from '../../components/post/DiskList';
import SizedImage from '../../components/post/SizedImage';
import SideNote from '../../components/post/SideNote';
import Image from 'next/image';
import Post from '../../components/post/Post.js';

export default function PostBody(){
  return (
  <Post title='The secret key to becoming a Keyboard Ninja'>
    <P>
      If you don't know how to touch-type, you can safely skip this post and <em>go learn touch-typing instead.</em>
    </P>
    <SizedImage src="/1/WritingCodeWritingBook.webm" width="1920" height="1080">
      Programming isn't linear
    </SizedImage>
    <P>
      See the difference? When we write a book, we do it in a continuous stream, but when we write code, we jump around and change little bits of it in different places.
    </P>
    <P> 
      The problem is, changing between typing-mode and cursor-moving-mode takes <i>time</i>.
    </P>
    <P>
      <strong> Can we go faster? </strong>
    </P>
    <P>
      This sucks. And there's a simple solution. Instead of moving your hands to and from the arrow keys, just remap the cursor movement to alt + your home row:
    </P>
    <SizedImage alt="arrow keys placed on jkl;" width="680" height="392" src="/1/good_shortcuts.png"> 
      Your new arrow keys
    </SizedImage>
    <P>
      Remap the following keys: <br/>
      Alt + j = [left arrow] <br/>
      Alt + k = [down arrow] <br/>
      Alt + l = [up arrow] <br/>
      Alt + ; = [right arrow] <br/>
      <br/>
      Alt + Shift + j = [select left arrow] <br/>
      Alt + Shift + k = [select down arrow] <br/>
      Alt + Shift + l = [select up arrow] <br/>
      Alt + Shift + ; = [select right arrow]
    </P>
    <P>
      Getting used to moving your cursor down with K and up with L
      <SideNote n="1">
        <p><em>But why are k and l bound to up and down and not vice versa?</em></p>
        <p> This layout is the same as in the <em> vi </em> text editor, but the keys are shifted one to the right so that they're on the home row.</p>
        <p> You can read about why the <em> vi </em> layout is like that in the first place <a href="https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys">here</a></p>
      </SideNote>
       will take some time getting used to, but it's worth it. After a few days you'll get the hang of it and soon enough it'll become second nature. To get better fast I can personally recommend playing some top-down game with jkl; instead of WASD. I can personally recommend <em> Crypt of the NecroDancer </em> for this.
    </P>
    <P>
      <strong> But can we go even faster? </strong>
    </P>
    <P>
      We can make our navigation and selection even more efficient by binding the following keys:
    </P>
    <P>
      Alt + u = [home] <br />
      Alt + i = word left <br />
      Alt + o = word right <br />
      Alt + p = [end] <br />
      <br />
      Alt + Shift + u = select [home] <br />
      Alt + Shift + i = select word left <br />
      Alt + Shift + o = select word right <br />
      Alt + Shift + p = select [end]
    </P>
    <SizedImage width="680" height="392" alt="uiop and jkl; all bound" src="/1/great_shortcuts.png"> 
      Now that's complete control.
    </SizedImage>
    <SizedImage src="/1/SuperiorMethod.webm" width="1920" height="1080">
      Home row cursor movement in action
    </SizedImage>
    <P>
      ending?
    </P>
  </Post>);
}