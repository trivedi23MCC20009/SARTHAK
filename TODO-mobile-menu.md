# Mobile Menu Fix

**Issue**: Mobile hamburger click → no menu visible

**Analysis**: Navbar.jsx has `md:hidden` on desktop ul + mobile logic, but:
• Mobile menu positioning/z-index issue (behind hero?)
• `hidden` → `flex` toggle not visible
• Missing mobile-specific backdrop/height

**Plan**:
1. Fix mobile ul: `absolute top-full left-0 w-full` + backdrop + z-40
2. Add overlay backdrop click-to-close
3. Test responsive view

Proceeding fix → test.


