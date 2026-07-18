/* ==========================================================
   Disability Awareness@Work — Module 5 content
   Part of the content/ folder. Loaded by index.html as a plain
   <script> tag (no build step, no fetch()) — safe to open the
   whole site locally or serve it from GitHub Pages.
   Edit this file to change THIS module only. Do not edit the
   module's position here — module order is set by the <script>
   tag order in index.html, not by anything in this file.
   ========================================================== */
window.DAW_CONTENT = window.DAW_CONTENT || [];
window.DAW_CONTENT.push(
{
  id:'recap-knowledge-check', time:'~22 min', title:'Recap, support & knowledge check',
  menuSub:'What to carry with you, where to turn for help, and the final check',
  lede:'Everything in this course compresses into a handful of moves \u2014 and one safety net. Check that it has stuck, compare your confidence with where you started, and take one commitment with you.',
  blocks:[
    {type:'callout', kind:'key', label:'Back to where this started', html:'<p>Focal Area 4 of the Enabling Masterplan 2030 asks that by 2030, persons with disabilities who can work are <strong>equally recognised for their abilities, knowledge, and skills</strong>.</p><p>You now have what that actually requires: an understanding of what a colleague\u2019s working day contains, practical moves for the moments that matter, and honesty about the assumptions that get in the way. None of it is complicated. All of it is yours to use.</p>'},

    {type:'h2', text:'The four rules'},
    {type:'tiles', items:[
      {icon:'chat', bg:'#E8EFF9', fg:'#1A4F9C', h:'1 \u00b7 Ask the person', p:'A colleague is the expert on what works. Ask privately, respectfully, about the work \u2014 then listen to the actual answer.'},
      {icon:'bulb', bg:'#EFF6DE', fg:'#4C6B1E', h:'2 \u00b7 Think before you speak', p:'Person-first language by default. If a colleague states a different preference, follow it without debate.'},
      {icon:'shield', bg:'#FBF0DC', fg:'#A66B12', h:'3 \u00b7 Avoid assumptions', p:'The disability type tells you where to start asking. It never tells you what someone cannot do.'},
      {icon:'people', bg:'#F9E9E4', fg:'#C4553B', h:'4 \u00b7 Ask before you help', p:'Offer, wait, then ask how. \u201cNo thanks\u201d is a complete answer. Help given without consent is not help.'}
    ]},

    {type:'h2', text:'The five moments, in one line each'},
    {type:'text', html:'<ul class="plain"><li><strong>Meeting a new colleague</strong> \u2014 introduce yourself normally, use the name, pass on the unwritten rules.</li><li><strong>Communicating clearly</strong> \u2014 be concrete, leave something to check back against, drop the idioms.</li><li><strong>Working side by side</strong> \u2014 hand over context, notice what the environment is doing, do not quietly take over.</li><li><strong>Offering help</strong> \u2014 offer, wait, then ask how.</li><li><strong>Including</strong> \u2014 invite, every time. The exclusion is in never being asked.</li></ul>'},

    {type:'h2', text:'When it is bigger than you'},
    {type:'text', html:'<p>Everything above is within your reach, whatever your job and whatever your level: how you speak, how you brief, how you offer help, what you assume, who you invite. That is most of it.</p><p>But some things are not yours to solve alone \u2014 and trying to is its own kind of mistake.</p>'},
    {type:'callout', kind:'key', label:'Your first call is HR', html:'<p>Your organisation, not you, holds the formal levers: workplace adjustments, equipment, job redesign, and access to national support and job coaches through <strong>SG Enable</strong>, Singapore\u2019s focal agency for disability and inclusion.</p><p>You do not need to know how any of that works. You need to know <strong>who to call</strong> \u2014 and that is HR.</p>'},
    {type:'tiles', items:[
      {icon:'shield', bg:'#E8EFF9', fg:'#1A4F9C', h:'Bring in HR when\u2026', p:'A colleague needs a workplace adjustment \u00b7 something has been disclosed and you are unsure what to do \u00b7 a barrier needs fixing beyond your reach \u00b7 you are simply out of your depth.'},
      {icon:'people', bg:'#EFF6DE', fg:'#4C6B1E', h:'How to raise it well', p:'Describe the work, never the health. \u201cThe handover is hard to follow at the counter \u2014 could we write it on the board?\u201d Not: \u201cI think Priya has a hearing problem.\u201d'},
      {icon:'chat', bg:'#FBF0DC', fg:'#A66B12', h:'Protect the confidence', p:'What a colleague tells you privately stays with you. Ask first \u2014 even before going to HR. The decision to disclose is never yours to make.'},
      {icon:'star', bg:'#F9E9E4', fg:'#C4553B', h:'Do not wait to be asked', p:'Speaking up is hard for anyone who fears being seen as difficult. Notice early. A barrier you spot is a barrier you can raise \u2014 without naming anyone.'}
    ]},
    {type:'callout', kind:'warm', label:'The line to remember', html:'<p><strong>You are not expected to solve this alone. You are expected to notice, to respond with respect, and to know who to call.</strong></p>'},
    {type:'callout', kind:'note', label:'This was Level 0', html:'<p>This course is a foundation \u2014 awareness, not expertise. Deeper training exists for those who want it or need it in a specific role, including structured workshops on recruitment, workplace accommodation, assistive technology and supporting positive behaviour. Ask HR what is available.</p>'},

    {type:'h2', text:'Knowledge check'},
    {type:'html', node:()=>el(`<div class="block"><p>${QUIZ.length} questions covering everything in this course. Instant feedback on each. <strong>${passMark()} out of ${QUIZ.length} correct is required to complete the course</strong> \u2014 not because this is an exam, but because every one of these moments matters to a real colleague. Retake as often as you like; the answer options are reshuffled each time. Your answers and score stay on this device.</p></div>`)},
    {type:'quiz'},
    {type:'confidence', slot:'confidenceEnd', q:'Now \u2014 how confident do you feel interacting with and supporting a colleague with a disability?', compare:true},
    {type:'h2', text:'Your commitment'},
    {type:'reflect', key:'r_commit', q:'Write one specific thing you will do differently in the next two weeks \u2014 a habit, a conversation, an invitation. Recognition is built from small acts, repeated. Name one.', ph:'e.g. \u201cI will ask the new colleague on my shift to join us at break \u2014 every time, not just once.\u201d'},
    {type:'html', node:()=>m5GateNode()},
    {type:'html', node:()=>{
      const w = el(`<div><div class="callout key"><span class="co-label">Take your reflections with you</span><p>Your notes from all ${numWord(MODULES.length)} modules live only in this browser. Download a text file to keep, or to talk through with your HR partner.</p><p style="margin-top:12px"><button class="btn small" id="dlBtn">Download my reflections (.txt)</button></p></div>
      <div class="callout note"><span class="co-label">Where to go next</span><p><a href="https://www.sgenable.sg" target="_blank" rel="noopener">sgenable.sg</a> \u2014 Singapore\u2019s first stop for disability and inclusion, with guides, training and resources for employers and employees alike.</p></div></div>`);
      w.querySelector('#dlBtn').addEventListener('click',()=>{
        const lines = ['DISABILITY AWARENESS@WORK \u2014 MY REFLECTIONS','Generated '+new Date().toLocaleString(),''];
        if(state.confidenceStart) lines.push('Confidence at start: '+state.confidenceStart+'/5');
        if(state.confidenceEnd) lines.push('Confidence at end:   '+state.confidenceEnd+'/5');
        if(state.quizScore!==null) lines.push('Best quiz score:     '+state.quizScore+'/'+QUIZ.length);
        lines.push('');
        Object.values(state.reflections).forEach(r=>{ if(r.a&&r.a.trim()){ lines.push('Q: '+r.q,'A: '+r.a.trim(),''); }});
        if(lines.length<8) lines.push('(No written reflections yet \u2014 go back and jot a few!)');
        const blob = new Blob([lines.join('\n')],{type:'text/plain'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'da-at-work-reflections.txt'; a.click();
        URL.revokeObjectURL(a.href);
      });
      return w;
    }},

    /* ==========================================================
       BETA v01 — FEATURE PREVIEW (remove this whole section before
       real learners see this course). It sits after the certificate
       gate on purpose, so it never affects completion or scoring.
       Every block here reuses facts already stated and approved
       earlier in this course — nothing new is being claimed, this
       is only to let you click-test each new widget once deployed.
       ========================================================== */
    {type:'h2', text:'BETA v01 \u2014 feature preview (delete before production)'},
    {type:'callout', kind:'warm', label:'For John, not learners', html:'<p>Everything below tests the new block types added in this build: select-all quick checks, images, video, tabs and a carousel. Nothing here affects the quiz score or certificate. Delete this whole section from <code>content/module-5-recap-knowledge-check.js</code> once you\u2019re happy each one works \u2014 search for \u201cBETA v01\u201d.</p>'},

    {type:'checkbox', q:'[Preview] Which of these are among the four broad disability types recognised in Singapore? Select all that apply.', options:['Physical disability','Chronic illness','Sensory impairment (hearing and vision)','Intellectual disability','Autism'], answer:[0,2,3,4], why:'Chronic illness is a related but separate area from the four types this course covers \u2014 see Module 2. This question just re-checks that fact through the new select-all widget.'},

    {type:'image', src:'content/images/example-photo.jpg', alt:'Placeholder \u2014 replace with a real photo, e.g. colleagues at a shift huddle', caption:'[Preview] This is the image block. Replace the src with a real file (e.g. content/images/your-photo.jpg) once you have one \u2014 until then it will show the "image not found" message below, which is expected.'},

    {type:'video', src:'content/videos/example-clip.mp4', captions:'', caption:'[Preview] This is the module-level video block (separate from the intro gate video). Replace the src with a real file once you have one \u2014 it will show a "video not found" message until then, which is expected.'},

    {type:'tabs', tabs:[
      {label:'Ask', html:'<p>[Preview \u2014 tabs widget] A colleague is the expert on what works. Ask privately, respectfully, about the work \u2014 then listen to the actual answer.</p>'},
      {label:'Listen', html:'<p>[Preview \u2014 tabs widget] Person-first language by default. If a colleague states a different preference, follow it without debate.</p>'},
      {label:'Adjust', html:'<p>[Preview \u2014 tabs widget] Offer, wait, then ask how. \u201cNo thanks\u201d is a complete answer. Help given without consent is not help.</p>'}
    ]},

    {type:'carousel', label:'Feature preview slides', slides:[
      {tag:'1 of 3', h:'Ask the person', html:'<p>[Preview \u2014 carousel widget] A colleague is the expert on what works for them. Ask privately and respectfully.</p>'},
      {tag:'2 of 3', h:'Think before you speak', html:'<p>[Preview \u2014 carousel widget] Person-first language by default \u2014 unless a colleague has stated their own preference.</p>'},
      {tag:'3 of 3', h:'Avoid assumptions', html:'<p>[Preview \u2014 carousel widget] The disability type tells you where to start asking. It never tells you what someone cannot do.</p>'}
    ]}
  ]
}
);
