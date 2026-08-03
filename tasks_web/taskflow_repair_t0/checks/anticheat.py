"""Anti-cheat gate: required components present + the mobile navigation really renders."""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = [
    "src/App.tsx",
    "src/components/SiteHeader.tsx",
    "src/components/MobileMenu.tsx",
    "src/components/PrimaryNav.tsx",
]


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    sheet = (repo / "src/components/MobileMenu.tsx").read_text()
    if "mobile-menu-link" not in sheet:
        return {"passed": False, "message": "mobile menu destinations removed"}
    header = (repo / "src/components/SiteHeader.tsx").read_text()
    if "nav-toggle" not in header:
        return {"passed": False, "message": "mobile navigation toggle removed"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
