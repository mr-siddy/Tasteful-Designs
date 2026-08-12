"""Anti-cheat gate: required components present + the small-screen menu really renders."""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = ["src/App.tsx", "src/components/SiteHeader.tsx"]


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    src = (repo / "src/components/SiteHeader.tsx").read_text()
    if "mobile-menu" not in src or "nav-toggle" not in src:
        return {"passed": False, "message": "the small-screen menu was removed"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
